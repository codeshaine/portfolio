import { useNavigate } from "react-router-dom";

export default function TerminalButton() {
  const navigate = useNavigate();
  return (
    <>
      <button
        className="animate-bounce hover:animate-none hover:border-b-8 border-teal-500 fixed bottom-6 right-6 p-3 bg-gray-900 dark:bg-white text-white rounded-full shadow-lg  transition-all duration-200"
        aria-label="Toggle Terminal"
        title="Open Terminal"
        onClick={() => {
          navigate("/terminal");
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="dark:text-black"
        >
          <polyline points="4 17 10 11 4 5"></polyline>
          <line x1="12" y1="19" x2="20" y2="19"></line>
        </svg>
      </button>
    </>
  );
}
