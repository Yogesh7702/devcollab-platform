import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProjects } from "../redux/projects/projectSlice";

const Projects = () => {
  const dispatch = useDispatch();
  const { projects } = useSelector((state) => state.projects);

  useEffect(() => {
    const dummyProjects = [
      {
        _id: "1",
        title: "LeetCode Study Room",
        description: "Weekly problem solving group",
        techStack: ["React", "Node", "Express"],
        level: "Beginner",
        type: "Learning",
        status: "Active",
        owner: { name: "Rahul S" },
        membersCount: 5,
      },
    ];

    dispatch(setProjects(dummyProjects));
  }, [dispatch]);

  return (
    <div className="container py-4">
      <h2>Explore Projects</h2>

      {projects.map((project) => (
        <div key={project._id}>
          <h4>{project.title}</h4>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Projects;
