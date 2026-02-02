import Project from "../models/Project.js";

export const getProjects = async (req, res) => {
    try {
         const projects = await Project.find();
        // // .populate("owner", "name")
        // .sort({ createdAt: -1 });

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


/** 
 @desc    //Create new project
  @route  // POST /api/projects
  @access // Private
  */
 
export const createProject = async (req, res) => {
  try {
    // 🔐 SAFETY CHECK
    if (!req.user || !req.user._id) {
      return res.status(401).json({
        message: "Not authorized",
      });
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

    // ✅ VALIDATION
    if (
      !title?.trim() ||
      !description?.trim() ||
      !goal?.trim() ||
      !difficulty ||
      !Array.isArray(techStack) ||
      techStack.length === 0 ||
      !Array.isArray(roles) ||
      roles.length === 0
    ) {
      return res.status(400).json({
        message: "Please fill all required fields",
      });
    }

    const membersRequired = roles.length;

    const project = await Project.create({
      title: title.trim(),
      description: description.trim(),
      techStack,
      roles,
      difficulty,
      duration,
      goal: goal.trim(),
      membersRequired,
      createdBy: req.user._id,
    });

    // ✅ CORRECT RESPONSE SHAPE
    return res.status(201).json({
      success: true,
      project, // 🔥 singular
    });
  } catch (error) {
    console.error("CREATE PROJECT ERROR 👉", error);
    return res.status(500).json({
      message: "Server error while creating project",
    });
  }
};

export const getMyProjects = async (req, res) => {
  try {
    const projects = await Project.find({
      members: req.user._id,
    }).sort({createdAt: -1});

    res.json(projects);
  } catch (error) {
    res.status(500).json({message: "Failed to fetch your projects"});
  }
};