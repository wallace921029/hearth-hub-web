import { useState } from "react";
import "./toto.scss";

function Todo() {
  /** todo level config */
  const todoLevels = [
    {
      level: "0",
      label: "Do it now",
      color: "red",
      linearFrom: "from-red-100",
      radioClass:
        "bg-red-100 border-red-300 checked:bg-red-200 checked:text-red-600 checked:border-red-600",
      textClass: "text-red-500",
    },
    {
      level: "1",
      label: "Delegate",
      color: "orange",
      linearFrom: "from-orange-100",
      radioClass:
        "bg-orange-100 border-orange-300 checked:bg-orange-200 checked:text-orange-600 checked:border-orange-600",
      textClass: "text-orange-500",
    },
    {
      level: "2",
      label: "Schedule",
      color: "blue",
      linearFrom: "from-blue-100",
      radioClass:
        "bg-blue-100 border-blue-300 checked:bg-blue-200 checked:text-blue-600 checked:border-blue-600",
      textClass: "text-blue-500",
    },
    {
      level: "3",
      label: "Eliminate",
      color: "gray",
      linearFrom: "from-gray-100",
      radioClass:
        "bg-gray-100 border-gray-300 checked:bg-gray-200 checked:text-gray-600 checked:border-gray-600",
      textClass: "text-gray-500",
    },
  ];
  /** selected todo level */
  const [selectedLevel, setSelectedLevel] = useState("0");

  return (
    <div
      className={`todo w-full h-full bg-linear-to-b ${
        todoLevels.find((level) => level.level === selectedLevel)?.linearFrom
      } to-white-100 transition-color duration-7000 ease-linear ${
        selectedLevel === "0"
      }`}
    >
      <div className="w-full p-4">
        <label className="w-full input rounded-2xl">
          <input type="search" className="grow" placeholder="Search" />
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
        </label>
      </div>

      <div className="w-full px-4 flex gap-2 flex-nowrap overflow-x-auto">
        {todoLevels.map(({ level, label, radioClass, textClass }) => (
          <label className="flex-none flex items-center gap-2" key={level}>
            <input
              className={`radio radio-xs ${radioClass}`}
              type="radio"
              name="level"
              checked={selectedLevel === level}
              onChange={() => setSelectedLevel(level)}
            />
            <span className={`text-sm ${textClass}`}>{label}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

export default Todo;
