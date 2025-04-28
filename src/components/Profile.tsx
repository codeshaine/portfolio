import { FaGithub, FaLinkedin, FaTwitter, FaBookOpen } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";
import { ProfileProps } from "../types";

export default function Profile({
  name,
  title,
  profileImage,
  social,
}: ProfileProps) {
  return (
    <div className="flex flex-col items-center md:flex-row md:items-start mb-8">
      <div className="relative w-32 h-32 mb-4 md:mb-0 md:mr-6">
        <img
          src={profileImage}
          alt={name}
          className="w-full h-full rounded-full object-cover ring-2 ring-gray-200 dark:ring-gray-700 relative z-10"
        />
      </div>
      <div className="flex flex-col items-center md:items-start">
        <div className="flex flex-col md:flex-row items-center mb-2">
          <h1 className="text-2xl font-bold mr-3 text-center md:text-left">
            {name}
          </h1>

          <div className="transition-all hover:pt-[0.15rem] hover:border-b-4 border-red-800 bg-red-400 duration-100 cursor-grab text-white text-xs px-2 py-1 rounded-full mt-2 md:mt-0">
            Open for Work
          </div>
        </div>
        <p className="text-gray-600 dark:text-gray-400 mb-4 text-center md:text-left">
          {title}
        </p>
        <div className="flex gap-3 mb-4 flex-wrap justify-center md:justify-start">
          {social.calendar && (
            <a
              href={social.calendar}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all hover:pt-[0.40rem] hover:border-b-4 hover:bg-white hover:text-cblack hover:dark:bg-cblack hover:dark:text-white hover:border-slate-400 px-4 py-2 text-xs font-medium bg-cblack text-white dark:bg-white dark:text-cblack rounded-md shadow-sm border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600"
              title="Schedule a call"
            >
              Schedule a call
            </a>
          )}
          {social.resume && (
            <a
              href={social.resume}
              download
              className="transition-all hover:pt-[0.40rem] hover:border-b-4 hover:border-slate-400 px-4 py-2 text-xs font-medium bg-white text-gray-700 dark:bg-cblack dark:text-gray-300 rounded-md shadow-sm border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600"
              title="Resume"
            >
              Resume
            </a>
          )}
          {social.github && (
            <a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all hover:pb-[0.15rem] hover:border-b-4 hover:border-slate-400 w-9 h-9 bg-white dark:bg-cblack flex items-center justify-center rounded-md border border-gray-200 dark:border-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600"
              title="GitHub"
            >
              <FaGithub className="text-gray-700 dark:text-gray-300" />
            </a>
          )}
          {social.email && (
            <a
              href={"mailto:" + social.email}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all hover:pb-[0.15rem] hover:border-b-4 hover:border-slate-400 w-9 h-9 bg-white dark:bg-cblack flex items-center justify-center rounded-md border border-gray-200 dark:border-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600"
              title="Email"
            >
              <FaEnvelope className="text-gray-700 dark:text-gray-300" />
            </a>
          )}
          {social.twitter && (
            <a
              href={social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all hover:pb-[0.15rem] hover:border-b-4 hover:border-slate-400 w-9 h-9 bg-white dark:bg-cblack flex items-center justify-center rounded-md border border-gray-200 dark:border-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600"
              title="Twitter"
            >
              <FaTwitter className="text-gray-700 dark:text-gray-300" />
            </a>
          )}
          {social.linkedin && (
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all hover:pb-[0.15rem] hover:border-b-4 hover:border-slate-400 w-9 h-9 bg-white dark:bg-cblack flex items-center justify-center rounded-md border border-gray-200 dark:border-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600"
              title="LinkedIn"
            >
              <FaLinkedin className="text-gray-700 dark:text-gray-300" />
            </a>
          )}
          {social.blog && (
            <a
              href={social.blog}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all hover:pb-[0.15rem] hover:border-b-4 hover:border-slate-400 w-9 h-9 bg-white dark:bg-cblack flex items-center justify-center rounded-md border border-gray-200 dark:border-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600"
              title="Writing"
            >
              <FaBookOpen className="text-gray-700 dark:text-gray-300" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
