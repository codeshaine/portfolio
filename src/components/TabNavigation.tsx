import React, { useState } from "react";
import { Project, ExperienceItem, TILCategory } from "../types";
import ProjectsSection from "./ProjectsSection";
import ExperienceSection from "./ExperienceSection";
import TILSection from "./TILSection";

interface TabsNavigationProps {
  projects: Project[];
  experience: ExperienceItem[];
  tilCategories: TILCategory[];
}

enum ActiveTab {
  projects,
  experience,
  til,
}

const TabsNavigation: React.FC<TabsNavigationProps> = ({
  projects,
  experience,
  tilCategories,
}) => {
  const [activeTab, setActiveTab] = useState<ActiveTab>(ActiveTab.projects);
  const navItems = [
    { label: "Projects", id: ActiveTab.projects },
    { label: "Experience", id: ActiveTab.experience },
    { label: "TIL", id: ActiveTab.til },
  ];

  return (
    <div className="my-12">
      {/* Navigation Tabs */}
      <div className="flex mb-8 bg-gray-100 dark:bg-gray-800 rounded-lg p-1.5">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`px-5 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
              activeTab === item.id
                ? "bg-white dark:bg-gray-700 shadow-sm text-gray-900 dark:text-white"
                : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Content Section */}
      <div className="min-h-[300px]">
        {activeTab === ActiveTab.projects && (
          <ProjectsSection projects={projects} />
        )}
        {activeTab === ActiveTab.experience && (
          <ExperienceSection items={experience} />
        )}
        {activeTab === ActiveTab.til && (
          <TILSection categories={tilCategories} />
        )}
      </div>
    </div>
  );
};

export default TabsNavigation;
