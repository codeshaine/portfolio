import React from "react";
import { ExperienceItem } from "../types";
import TechBadge from "./ui/TechBadge";

interface ExperienceSectionProps {
  items: ExperienceItem[];
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ items }) => {
  return (
    <div className="space-y-12">
      {items.map((exp, index) => (
        <div
          key={index}
          className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-700"
        >
          <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary-500 border-2 border-white dark:border-gray-900"></div>

          <div className="mb-1 flex items-center justify-between">
            <h3 className="text-lg font-medium">
              {exp.role} @ {exp.company}
            </h3>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {exp.period}
            </span>
          </div>

          <ul className="mt-2 mb-4 space-y-1 text-gray-600 dark:text-gray-400">
            {exp.description.map((item, idx) => (
              <li key={idx} className="flex">
                <span className="mr-2">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap">
            {exp.technologies.map((tech, idx) => (
              <TechBadge key={idx} name={tech} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceSection;
