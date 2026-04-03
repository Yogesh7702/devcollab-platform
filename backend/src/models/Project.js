import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true },

    techStack: [
      {
        type: String,
        enum: [
          "React",
          "Node.js",
          "Express",
          "MongoDB",
          "Javascript",
          "TypeScript",
          "Java",
          "Python",
          "AI",
          "ML",
          "Next.js",
          "HTML",
          "CSS",
          "Spring Boot",
        ],
        required: true,
      },
    ],

    difficulty: {
      type: String,
      enum: ["Beginner", "Intermediate", "Advanced"],
      required: true,
    },

    roles: [
  {
    role: {
      type: String,
      enum: ["Frontend", "Backend", "UI/UX Designer", "DevOps", "Full-stack"],
      required: true,
    },
    count: {
      type: Number,
      required: true,
      min: 1,
    }
  }
],

    duration: String,
    goal: String,

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // ✅ Approved members with their roles
    membersJoined: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
        role: {
          type: String,
        },
      },
    ],

    status: {
      type: String,
      enum: ["Open", "Closed"],
      default: "Open",
    },
  },
  { timestamps: true }
);

const Project = mongoose.model("Project", projectSchema);

export default Project;