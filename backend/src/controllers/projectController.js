import mongoose from "mongoose";
import Project from "../models/Project.js";
import JoinRequest from "../models/JoinRequest.js";


const formatProject = (p) => {

  const rawRoles = p.roles;
  const roles = Array.isArray(rawRoles) ? rawRoles : [];

 let membersRequired = 0;

  roles.forEach((r) => {
    if (typeof r === "string") {
      membersRequired += 1;
    } else if (r && typeof r === "object" && r.count != null) {
      membersRequired += r.count;
    }
  });

  const membersCount = Array.isArray(p.membersJoined) ? p.membersJoined.length : 0;

  const status =
    membersRequired > 0 && membersCount >= membersRequired
      ? "closed"
      : "open";



  return {
    _id: p._id,
    title: p.title,
    description: p.description,
    techStack: p.techStack,
    difficulty: p.difficulty,
    duration: p.duration,
    goal: p.goal,
    roles: rawRoles,
    membersJoined: p.membersJoined,

    membersRequired, 
    membersCount,    

   status: (membersRequired > 0 && membersCount >= membersRequired) ? "closed" : "open",

    createdBy: p.createdBy,
    createdAt: p.createdAt,
  };
};


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
   console.log("ROLES FROM FRONTEND:", req.body.roles); 

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

    console.log("ROLES CREATEPROJRECT : ", roles);
    

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
  const { id } = req.params;

  console.log("🔍 req.params.id:", id);
  console.log("🔍 auth.userId:", req.user?._id);

  // ObjectId.isValid check
  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).json({ message: "Invalid project ID" });
  }

  try {
    const project = await Project.findById(id);

    if (!project) {
      console.log("❌ Project.findById returned null for id:", id);
      return res.status(404).json({ message: "Project not found" });
    }

    const formatted = formatProject(project);
    res.status(200).json({ project: formatted });
  } catch (error) {
    console.log("❌ getProjectById Error:", error);
    res.status(500).json({ message: error.message });
  }
};


// ─── JOIN PROJECT (direct join — not used in main flow) ───────────────────
// FIX: Pehle push(role) tha — string push hoti thi, object nahi
// Isliye roleTaken check hamesha fail hoti thi requestToJoinProject mein
// Ab push({ user, role }) — consistent with handleJoinRequest
