import { TILCategory } from "../types";

export default function TILSection({
  categories,
}: {
  categories: TILCategory[];
}) {
  return (
    <div className="relative border-l border-gray-300 dark:border-gray-700 pl-6 space-y-10">
      {categories.map((item, index) => (
        <div key={index} className="relative">
          <div className="bg-gray-500 dark:bg-gray-700 absolute -left-[1.85rem] top-2 w-3 h-3 bg-primary-500 rounded-full border-2 border-white dark:border-gray-800"></div>

          <div>
            <div className="inline-block bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-xs font-semibold px-2 py-1 rounded mb-3">
              {item.date}
            </div>

            <ul className="mt-2 space-y-2 ">
              {item.learned.map((learning, idx) => (
                <li
                  key={idx}
                  className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed list-disc ml-8 break-words"
                >
                  {learning}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
