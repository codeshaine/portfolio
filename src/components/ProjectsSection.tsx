import React from "react";
import { Project } from "../types";
import TechBadge from "./ui/TechBadge";
import { FaGithub, FaLink } from "react-icons/fa6";

interface ProjectsSectionProps {
  projects: Project[];
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 gap-6">
      {projects.map((project, index) => (
        <div
          key={index}
          className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[rgba(255,255,255,0.2)] hover:shadow-md"
        >
          <div className="p-6">
            <h3 className="text-xl font-medium mb-2">{project.projName}</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {project.shortDesc}
            </p>
            <div className="flex flex-wrap mb-4">
              {project.techTags.map((tech, idx) => (
                <TechBadge key={idx} name={tech} />
              ))}
            </div>
            <div className="flex space-x-3">
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-primary-600 dark:text-primary-400 hover:underline"
                >
                  <FaLink className="inline-block" />
                  <span>View Project</span>
                </a>
              )}
              {project.gbLink && (
                <a
                  href={project.gbLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                >
                  <FaGithub className="inline-block" />
                  <span>Source Code</span>
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsSection;
