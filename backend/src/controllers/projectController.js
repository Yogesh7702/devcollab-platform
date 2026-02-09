// import Project from "../models/Project.js";

// // ================= GET ALL PROJECTS =================
// export const getProjects = async (req, res) => {
//   try {
//     const projects = await Project.find();

//     const formatted = projects.map((p) => ({
//   _id: p._id,
//   title: p.title,
//   description: p.description,
//   techStack: p.techStack,

  
//   difficulty: p.difficulty,
//   duration: p.duration,
//   goal: p.goal,

//   roles: p.roles,
//   membersRequired: p.membersRequired,
//   membersCount: p.membersJoined,

//   status: p.status,
//   createdBy: p.createdBy,
//   createdAt: p.createdAt,
// }));

//     res.json({
//       projects: formatted,
//     });
//   } catch (error) {
//     console.error("GET PROJECTS ERROR 👉", error);
//     res.status(500).json({
//       message: error.message || "Failed to fetch projects",
//     });
//   }
// };


// export const createProject = async (req, res) => {
//   try {
//     if (!req.user || !req.user._id) {
//       return res.status(401).json({ message: "Not authorized" });
//     }

//     const {
//       title,
//       description,
//       techStack,
//       roles,
//       difficulty,
//       duration,
//       goal,
//     } = req.body;

//     if (
//       !title?.trim() ||
//       !description?.trim() ||
//       !goal?.trim() ||
//       !difficulty ||
//       !Array.isArray(techStack) ||
//       techStack.length === 0 ||
//       !Array.isArray(roles) ||
//       roles.length === 0
//     ) {
//       return res.status(400).json({
//         message: "Please fill all required fields",
//       });
//     }

//     const membersRequired = roles.length;

//     const project = await Project.create({
//       title: title.trim(),
//       description: description.trim(),
//       techStack,
//       roles,
//       difficulty,
//       duration,
//       goal: goal.trim(),
//       membersRequired,
//       createdBy: req.user._id,
//     });

//     return res.status(201).json({
//       success: true,
//       project,
//     });
//   } catch (error) {
//     console.error("CREATE PROJECT ERROR 👉", error);
//     res.status(500).json({
//       message: "Server error while creating project",
//     });
//   }
// };


// export const getMyProjects = async (req, res) => {
//   try {
//     const projects = await Project.find({
//       members: req.user._id,
//     }).sort({ createdAt: -1 });

//     res.json(projects);
//   } catch (error) {
//     res.status(500).json({
//       message: "Failed to fetch your projects",
//     });
//   }
// };


// export const getProjectById = createAsyncThunk(
//   "projects/getById",
//   async (id, thunkAPI) => {
//     try {
//       const token = thunkAPI.getState().auth.user?.token;

//       if (!token) {
//         throw new Error("No token found");
//       }

//       const res = await axios.get(
//         `http://localhost:5000/api/projects/${id}`,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       // 🔥 BACKEND RETURNS DIRECT PROJECT
//       return res.data;

//     } catch (error) {
//       return thunkAPI.rejectWithValue(
//         error.response?.data?.message || "Failed to fetch project"
//       );
//     }
//   }
// );





import Project from "../models/Project.js";

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
      membersJoined: p.membersJoined,

      membersRequired: p.roleslength,
      membersCount: p.membersJoined.length, // ✅ real number

      status: p.membersJoined.length >= p.roles.length ? "Closed" : "Open",
      createdBy: p.createdBy,
      createdAt: p.createdAt,
    }));

    res.status(200).json({ projects: formatted });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ================= CREATE PROJECT =================
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
      membersJoined: []
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
      membersRequired: roles.length,
      createdBy: req.user._id,
    });

    res.status(201).json({ project });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



export const getProjectById = async (req, res) => {
  try {
    // Auth middleware already checks req.user, but double-check
    console.log('REQ.USER 👉', req.user);  // ← DEBUG LOG ADD KAR

    const { id } = req.params;
    console.log('PROJECT ID 👉', id);     // ← DEBUG LOG

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
  const {role} = req.body;
  const project = await Project.findById(req.params.id);

  if(!project) {
    return res.status(404).json({message: "Project not found"});
  }

  if(!project.roles.includes(role)) {
    return res.status(400).json({message: "Invalid role"});

    if(project.membersJoined.includes(role)) {
      return res.status(400).json({message: "Role already taken"});
    }

    projet.membersJoined.push(role);

    if(project.membersJoined.length === project.roles.length) {
      project.status = "Closed";
    }

    await project.save();

    res.json({message: "Joined successfully", project});
  }
}