import { useNavigate } from "react-router-dom";
export function GuiButton() {
  const navigate = useNavigate();
  return (
    <>
      <button
        className="animate-bounce hover:animate-none hover:border-b-8 border-teal-500 fixed bottom-6 right-6 p-3 bg-white text-white rounded-full shadow-lg  transition-all duration-200"
        aria-label={"Close Terminal"}
        title={"Close Terminal"}
        onClick={() => {
          navigate("/");
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
          className={"text-black"}
        >
          <polyline points="6 9 18 9"></polyline>
          <line x1="12" y1="19" x2="20" y2="19"></line>
        </svg>
      </button>
    </>
  );
}
