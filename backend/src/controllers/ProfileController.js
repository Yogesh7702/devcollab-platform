import User from "../models/User.js";
import Project from "../models/Project.js";
import JoinRequest from "../models/JoinRequest.js";

export const getProfileDashboard = async (req, res) => {
    console.log("✅ getProfileDashboard hit");
  console.log("params:", req.params);
  try {
    const { id: userId } = req.params;

    const user = await User.findById(userId).select(
      "name email role createdAt",
    );

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const projectsCreated = await Project.find({ createdBy: userId })
      .select(
        "title description techStack difficulty duration status createdAt membersJoined",
      )
      .sort({ createdAt: -1 });

    const joinedProjects = await Project.find({ "membersJoined.user": userId })
      .select(
        "title description techStack difficulty duration status createdAt membersJoined",
      )
      .populate("createdBy", "name email")
      .sort({ createdAt: -1 });

    const joinRequests = await JoinRequest.find({user: userId})
        .select("project role status createdAt")
        .populate("project", "title status difficulty")
        .sort({ createdAt: -1 });


    const stats = {
        projectsCreated: projectsCreated.length,
        projectsJoined: joinedProjects.length,
        pendingRequests: joinRequests.filter((request) => request.status === "pending").length,
        approvedRequests: joinRequests.filter((request) => request.status === "approved").length,
        rejectedRequests: joinRequests.filter((request) => request.status === "rejected").length,
        
    };

    const requests = {
      pending: joinRequests.filter((request) => request.status === "pending"),
      approved: joinRequests.filter((request) => request.status === "approved"),
      rejected: joinRequests.filter((request) => request.status === "rejected"),
    };


    res.status(200).json({
        success: true,
        user,
        stats,
        requests,
        projects: {
            created: projectsCreated,
            joined: joinedProjects,
        }
    })


  } catch (error) {
    console.log("controller error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch profile dashboard data",
      error: error.message,
    });
  }
};
