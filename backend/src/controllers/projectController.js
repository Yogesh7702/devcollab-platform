import Project from "../models/Project.js";

export const getProjects = async (req, res) => {
    try {
        const projects = await Project.find({status: "Active"})
        .populate("owner", "name")
        .sort({ createdAt: -1 });

        const formatted = projects.map((p) => ({
            _id : p._id,
            title: p.title,
            description: p.description,
            techStack: p.techStack,
            level: p.level,
            type: p.type,
            status: p.status,
            owner: p.owner,
            membersCount: p.members.length,
            createdAt: p.createdAt,
        }));

        res.json(formatted);
    } catch (error) {
        res.status(500).json({message: "Failed to fetch projects"});
    }
};


import Project from "../models/Project.js";

export const createProject = async (req, res) => {
  try {
    const {
      title,
      description,
      techStack,
      level,
      type,
    } = req.body;

    const project = await Project.create({
      title,
      description,
      techStack,
      level,
      type,
      owner: req.user._id,
      members: [req.user._id], // owner is first member
    });

    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({ message: "Failed to create project" });
  }
};
