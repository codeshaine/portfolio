import { useEffect, useState } from "react";

export default function YourComponent() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    });

    observer.observe(document.documentElement, { attributes: true });

    setIsDarkMode(document.documentElement.classList.contains("dark"));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="mb-8">
      <h2
        className="lg:text-[4rem]  text-[3.5rem] leading-tight mb-6  tracking-tight"
        style={{
          textShadow: isDarkMode
            ? "0px 2px 2px rgba(255, 255, 255, 0.5)"
            : "0px 3px 4px rgba(0, 0, 0, 0.5)",
          fontWeight: 400,
        }}
      >
        a self-proclaimed{" "}
        <span style={{ fontWeight: 500 }}>
          {"{"} *engineer {"}"}
        </span>{" "}
        who wants to build really cool sh*t
      </h2>
    </div>
  );
}
