import Project from "../models/Project.js";
import JoinRequest from "../models/JoinRequest.js";

export const getProjects = async (req, res) => {
  try {
    const projects = await Project.find();

    const formatted = projects.map((p) => ({
      _id: p._id,
      title: p.title,
      description: p.description,
      techStack: p.techStack,
      difficulty: p.difficulty,
      duration: p.duration,
      goal: p.goal,
      roles: p.roles,
      membersJoined: p.membersJoined, // ARRAY

      membersRequired: p.roles.length,
      membersCount: p.membersJoined.length,

      status:
        p.membersJoined.length >= p.roles.length
          ? "Closed"
          : "Open",

      createdBy: p.createdBy,
      createdAt: p.createdAt,
    }));

    res.status(200).json({ projects: formatted });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


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

    res.status(201).json({ project });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



export const getProjectById = async (req, res) => {
  try {
    
    console.log('REQ.USER 👉', req.user);  

    const { id } = req.params;
    console.log('PROJECT ID 👉', id);    

    const project = await Project.findById(id);
    
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    console.log('PROJECT FOUND 👉', project.title);  // ← DEBUG

    res.status(200).json({ project });  // ← { project: {...} }
  } catch (error) {
    console.log('ERROR 👉', error.message);
    res.status(500).json({ message: error.message });
  }
};


export const joinProject = async (req, res) => {
  try {
    const { role } = req.body;
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    // role project ka hi nahi
    if (!project.roles.includes(role)) {
      return res.status(400).json({ message: "Invalid role" });
    }

    // role already taken
    if (project.membersJoined.includes(role)) {
      return res.status(400).json({ message: "Role already taken" });
    }

    // join
    project.membersJoined.push(role);

    if (project.membersJoined.length === project.roles.length) {
      project.status = "Closed";
    }

    await project.save();

    res.json({ message: "Joined successfully", project });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



export const requestToJoinProject = async (req, res) => {
  const {role} = req.body;
  const userId = req.user._id;
  const projectId = req.params.id;

  const project = await Project.findById(projectId);

  if(!project) {
    return res.status(404).json({message: "Project not found"});
  }

  if(project.membersJoined >= projec.membersRequired) {
    return res.status(400).json({message: "Project is full"});
  }

  if(!project.roles.includes(role)) {
    return res.status(400).json({message: "Invalide role"});
  }

  const alreadyRequested = await JoinRequest.findOne({
    project: projectId,
    user: userId
  });

  if(alreadyRequested) {
    return res.status(400).json({message: "Already requested"});
  }

  const request = await JoinRequest.create({
    project: projectId,
    user: userId,
    role
  });

  res.status(201).json({
    message: "Join request",
    request
  });
};



export const getJoinRequests = async (req, res) => {
  const project = await Project.findById(req.params.id);

  if (!project) {
    return res.status(404).json({ message: "Project not found" });
  }

  
  if (project.createdBy.toString() !== req.user._id.toString()) {
    return res.status(403).json({ message: "Not allowed" });
  }

  const requests = await JoinRequest.find({
    project: req.params.id,
    status: "pending"
  }).populate("user", "name email");

  res.json(requests);
};



export const handleJoinRequest = async (req, res) => {
  const { action } = req.body; 

  const request = await JoinRequest.findById(req.params.requestId)
    .populate("project");

  if (!request) {
    return res.status(404).json({ message: "Request not found" });
  }

  const project = request.project;

 
  if (project.createdBy.toString() !== req.user._id.toString()) {
    return res.status(403).json({ message: "Not allowed" });
  }

  if (action === "approve") {
    request.status = "approved";
    project.membersJoined += 1;

    if (project.membersJoined >= project.membersRequired) {
      project.status = "Closed";
    }

    await project.save();
  } else {
    request.status = "rejected";
  }

  await request.save();

  res.json({ message: `Request ${action}ed` });
};