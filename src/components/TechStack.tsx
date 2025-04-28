import { TechStackProps } from "../types";

export default function TechStack({ stack }: TechStackProps) {
  return (
    <div className="mb-8">
      {stack.map((section, index) => (
        <div key={index} className="mb-2">
          <div className="flex">
            <span className="text-gray-600 dark:text-gray-400 w-28">
              {section.heading}:
            </span>
            <span className="text-black dark:text-white">
              {section.skills.join(", ")}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
