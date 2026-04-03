import Project from "../models/Project.js";


// ─── REQUEST TO JOIN PROJECT ───────────────────────────────────────────────
export const requestToJoinProject = async (req, res) => {
  try {
    const { role } = req.body;
    const userId = req.user._id;
    const projectId = req.params.id;

    console.log("BODY:", req.body);
console.log("FILE:", req.file);

    const project = await Project.findById(projectId);

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    // valid role
    const roleExists = project.roles.some(
      (r) => (typeof r === "string" ? r === role : r.role === role)
    );
    if (!roleExists) {
      return res.status(400).json({ message: "Invalid role" });
    }

    // max slots
    const totalSlots = project.roles.reduce((acc, r) => {
      if (typeof r === "string") return acc + 1;
      if (typeof r === "object" && r.count != null) return acc + r.count;
      return acc;
    }, 0);

    const joinedCount = project.membersJoined.length;
    if (joinedCount >= totalSlots) {
      return res.status(400).json({ message: "Project is full" });
    }

    // role already taken
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
    console.log("❌ requestToJoinProject Error:", error);
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
