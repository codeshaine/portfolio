import { ExperienceItem, Project, TechStackItem, TILCategory } from "../types";

export function Link({ text, link }: { text: string; link: string }) {
  return (
    <a className="underline text-blue-900" target="_blank" href={link}>
      {text}
    </a>
  );
}

export const tilCategories: TILCategory[] = [
  {
    date: "April 2025",
    learned: [
      <>
        Built <Link text="yam" link="https://github.com/codeshaine/yam" />
      </>,
      <>
        Built a{" "}
        <Link
          text="Video Transcoding"
          link="https://github.com/codeshaine/transcode"
        />{" "}
        Application
      </>,
    ],
  },
  {
    date: "March 2025",
    learned: [
      <>
        Built{" "}
        <Link
          link="https://github.com/codeshaine/ekashuunyam-monorepo"
          text="ekashunyam"
        />
      </>,
      <>
        Built{" "}
        <Link
          link="https://github.com/codeshaine/laughing-pancake"
          text="Jetara"
        />
      </>,
      <>Turned off copilot :/</>,
      <>
        Learned some <Link text="elm" link="https://elm-lang.org/" />
      </>,
      <>Started using zed</>,
    ],
  },
  {
    date: "Feb 2025",
    learned: [
      <>
        Learned about cryptography, wrote a{" "}
        <Link
          text="blog post"
          link="https://codeshaine.bearblog.dev/crypgology-using-golang/"
        />
      </>,
    ],
  },
  {
    date: "Jan 2025",
    learned: [
      <>
        Built{" "}
        <Link
          link="https://github.com/codeshaine/curlify"
          text="curlify
             "
        />
      </>,
    ],
  },
];

export const skills: TechStackItem[] = [
  {
    heading: "Languages",
    skills: ["JavaScript", "TypeScript", "Go", "C++", "HTML/CSS"],
  },
  {
    heading: "Frameworks",
    skills: ["Express", "React", "Next.js", "Echo (go)"],
  },
  { heading: "Database", skills: ["PostgreSQL, MongoDB", "Redis"] },
  {
    heading: "DevOps",
    skills: ["Docker", "AWS EC2", "AWS S3", "GitHub WorkFlow(CI/CD)"],
  },
];

export const projects: Project[] = [
  {
    projName: "Carter: Full-Stack E-Commerce Platform",
    shortDesc:
      "A full-featured e-commerce application built with modern web technologies.",
    gbLink: "https://github.com/codeshaine/carter",
    liveLink: "",
    techTags: [
      "JavaScript",
      "React",
      "Node.js",
      "Express",
      "Prisma",
      "PostgreSQL",
      "Redis",
      "Passport.js",
    ],
  },
  {
    projName: "Ekashunyam: Fest Website",
    shortDesc:
      "Dynamic Inter-College Fest website for event Registration and Management.",
    gbLink: "https://github.com/axioz-dev",
    liveLink: "https://ekashunyam.xyz/",
    techTags: [
      "Next",
      "TypeScript",
      "NextAuth",
      "Postgres",
      "Tailwind",
      "vercel",
      "GSAP",
    ],
  },
  {
    projName: "Jetara: Event Mangagement site",
    shortDesc: "An College level Event Publishing and Management site",
    gbLink: "https://github.com/axioz-dev",
    liveLink: "https://laughing-pancake-kohl.vercel.app",
    techTags: [
      "Next",
      "TypeScript",
      "Postgres",
      "TRPC",
      "NextAuth",
      "Tailwind",
      "vercel",
    ],
  },
  {
    projName: "Yam",
    shortDesc:
      "A Tool for setting up Linters, Formatters, Test and Git Hooks and many more for Typescript and Javascript projects",
    gbLink: "https://github.com/codeshaine/yam",
    liveLink: "",
    techTags: ["TypeScript", "Nodejs"],
  },
  {
    projName: "Curlify",
    shortDesc: "A Terminal User Interface API testing tool similar to postman",
    gbLink: "https://github.com/codeshaine/curlify",
    liveLink: "",
    techTags: ["Go", "BubbleTea", "Bubbles"],
  },
  {
    projName: "Transcode",
    shortDesc: "Multi Threaded video Transcoding and Compression System",
    gbLink: "https://github.com/codeshaine/transcode",
    liveLink: "",
    techTags: ["Go", "MultiThreading"],
  },

  {
    projName: "Echoes",
    shortDesc: "HTMX + Go based anonnymous message sharing app",
    gbLink: "https://github.com/codeshaine/echoes",
    liveLink: "",
    techTags: ["Go", "HTMX", "AWS"],
  },
  {
    projName: "CLI TODO Application",
    shortDesc:
      "A Command-Line TODO application written in Go to manage tasks with add, complete, delete, and list functionalities.",
    gbLink: "https://github.com/codeshaine/go-todo-app",
    liveLink: "",
    techTags: ["Go", "CLI"],
  },
];

export const experience: ExperienceItem[] = [
  {
    company: "Codelab Systems",
    role: "Mern Stack Intern",
    period: "Dec 2024 - Dec 2024",
    description: [
      "Learned about mern stack by the instructors",
      "Developed React based application with react hooks",
      "Develped a E-Commerce rip off for the company",
      "Learned about deployment, web securities and many more",
    ],
    technologies: ["JavaScript", "React", "Node.js", "Vercel"],
  },
];

export const social = {
  email: "shainilps.work@gmail.com",
  github: "https://github.com/codeshaine",
  linkedin: "https://linkedin.com/in/shainilps",
  twitter: "https://twitter.com/code_shaine",
  resume: "/resume.pdf",
  calendar: "https://calendly.com/codeshaine/30min",
  blog: "https://codeshaine.bearblog.dev",
};
