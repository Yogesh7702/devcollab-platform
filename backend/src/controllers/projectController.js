



import Project from "../models/Project.js";
import JoinRequest from "../models/JoinRequest.js";


// ─── Helper: consistent format everywhere ─────────────────────────────────
// FIX: getProjectById raw doc return karta tha — status/membersRequired missing tha
// Ab ek hi jagah se sab calculate hoga
const formatProject = (p) => ({
  _id: p._id,
  title: p.title,
  description: p.description,
  techStack: p.techStack,
  difficulty: p.difficulty,
  duration: p.duration,
  goal: p.goal,
  roles: p.roles,
  membersJoined: p.membersJoined,
  membersRequired: p.roles.length,
  membersCount: p.membersJoined.length,
  // FIX: lowercase "open"/"closed" — frontend mein project.status === "open" check hai
  status: p.membersJoined.length >= p.roles.length ? "closed" : "open",
  createdBy: p.createdBy,
  createdAt: p.createdAt,
});


// ─── GET ALL PROJECTS ──────────────────────────────────────────────────────
export const getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json({ projects: projects.map(formatProject) });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// ─── CREATE PROJECT ────────────────────────────────────────────────────────
export const createProject = async (req, res) => {
  try {
    if (!req.user?._id) {
      return res.status(401).json({ message: "Not authorized" });
    }

    const {
      title,
      description,
      techStack,
      roles,
      difficulty,
      duration,
      goal,
    } = req.body;

    if (
      !title?.trim() ||
      !description?.trim() ||
      !goal?.trim() ||
      !difficulty ||
      !techStack?.length ||
      !roles?.length
    ) {
      return res.status(400).json({
        message: "Please fill all required fields",
      });
    }

    const project = await Project.create({
      title: title.trim(),
      description: description.trim(),
      techStack,
      roles,
      difficulty,
      duration,
      goal: goal.trim(),
      membersJoined: [],
      createdBy: req.user._id,
    });

    res.status(201).json({ project: formatProject(project) });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// ─── GET PROJECT BY ID ─────────────────────────────────────────────────────
// FIX: Pehle raw mongoose doc return hota tha jisme status field nahi thi
// Isliye frontend pe project "open" dikhta tha UI mein lekin join card pe
// membersRequired bhi nahi tha — sab undefined aa raha tha
export const getProjectById = async (req, res) => {
  try {
    const { id } = req.params;

    const project = await Project.findById(id);

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    const formatted = formatProject(project);
    console.log("FORMATTED STATUS:", formatted.status);  // ← yeh add kar
    console.log("FORMATTED MEMBERS:", formatted.membersJoined);
   
    res.status(200).json({ project: formatted });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// ─── JOIN PROJECT (direct join — not used in main flow) ───────────────────
// FIX: Pehle push(role) tha — string push hoti thi, object nahi
// Isliye roleTaken check hamesha fail hoti thi requestToJoinProject mein
// Ab push({ user, role }) — consistent with handleJoinRequest
export const joinProject = async (req, res) => {
  try {
    const { role } = req.body;
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    if (!project.roles.includes(role)) {
      return res.status(400).json({ message: "Invalid role" });
    }

    // FIX: member.role check — pehle string tha toh .some() kaam nahi karta tha
    const roleTaken = project.membersJoined.some(
      (member) => member.role === role
    );

    if (roleTaken) {
      return res.status(400).json({ message: "Role already taken" });
    }

    // FIX: object push karo string nahi
    project.membersJoined.push({ user: req.user._id, role });

    await project.save();

    res.json({ message: "Joined successfully", project: formatProject(project) });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// ─── REQUEST TO JOIN PROJECT ───────────────────────────────────────────────
export const requestToJoinProject = async (req, res) => {
  try {
    const { role } = req.body;
    const userId = req.user._id;
    const projectId = req.params.id;

    const project = await Project.findById(projectId);

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    if (project.membersJoined.length >= project.roles.length) {
      return res.status(400).json({ message: "Project is full" });
    }

    if (!project.roles.includes(role)) {
      return res.status(400).json({ message: "Invalid role" });
    }

    // FIX: yeh ab sahi kaam karega kyunki joinProject fix ho gaya
    // membersJoined mein ab objects hain { user, role } — string nahi
    const roleTaken = project.membersJoined.some(
      (member) => member.role === role
    );

    if (roleTaken) {
      return res.status(400).json({ message: "Role already taken" });
    }

    const alreadyRequested = await JoinRequest.findOne({
      project: projectId,
      user: userId,
      status: "pending",
    });

    if (alreadyRequested) {
      return res.status(400).json({ message: "Already requested" });
    }

    const request = await JoinRequest.create({
      project: projectId,
      user: userId,
      role,
    });

    res.status(201).json({
      message: "Join request sent",
      request,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// ─── GET JOIN REQUESTS ─────────────────────────────────────────────────────
export const getJoinRequests = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    if (project.createdBy.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Not allowed" });
    }

    const requests = await JoinRequest.find({
      project: req.params.id,
      status: "pending",
    }).populate("user", "name email");

    res.json(requests);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// ─── HANDLE JOIN REQUEST (approve / reject) ────────────────────────────────
export const handleJoinRequest = async (req, res) => {
  try {
    const { action } = req.body;

    const request = await JoinRequest.findById(req.params.requestId).populate(
      "project"
    );

    if (!request) {
      return res.status(404).json({ message: "Request not found" });
    }

    const project = request.project;

    if (project.createdBy.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Not allowed" });
    }

    if (request.status !== "pending") {
      return res.status(400).json({ message: "Request already handled" });
    }

    if (action === "approve") {
      const roleTaken = project.membersJoined.some(
        (member) => member.role === request.role
      );

      if (roleTaken) {
        return res.status(400).json({ message: "Role already taken" });
      }

      request.status = "approved";

      project.membersJoined.push({
        user: request.user,
        role: request.role,
      });

      // FIX: project.status = "Closed" mongoose mein save nahi hota tha
      // agar Project model mein status field nahi thi
      // Ab formatProject se status calculate hoti hai — model pe depend nahi
      await project.save();

    } else if (action === "reject") {
      request.status = "rejected";
    } else {
      return res.status(400).json({ message: "Invalid action" });
    }

    await request.save();

    res.json({ message: `Request ${action}ed successfully` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
