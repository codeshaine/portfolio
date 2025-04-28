import React from "react";

interface TechBadgeProps {
  name: string;
}

const TechBadge: React.FC<TechBadgeProps> = ({ name }) => {
  return (
    <span className="inline-block px-3 py-1 text-xs bg-gray-200 dark:bg-gray-700 rounded-full mr-2 mb-2">
      {name}
    </span>
  );
};

export default TechBadge;
