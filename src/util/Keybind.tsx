import { Command } from "../components/CommandArea";
import { GetOutput } from "./GetOutput";

export default function handleKeyDown(
  e: React.KeyboardEvent<HTMLInputElement>,
  currentCommand: string,
  commandList: Command[],
  currentIndex: number,
  setCommandList: React.Dispatch<React.SetStateAction<Command[]>>,
  setCurrentCommand: React.Dispatch<React.SetStateAction<string>>,
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>,
) {
  if (e.key === "Enter") {
    const newCommand: Command = {
      command: currentCommand.toLowerCase(),
      output: GetOutput(currentCommand, setCommandList),
    };
    if (newCommand.command !== "clear")
      setCommandList((prev) => [...prev, newCommand]);
    setCurrentCommand("");
    setCurrentIndex(-1);
  } else if (e.key === "ArrowUp") {
    if (commandList.length > 0) {
      if (currentIndex == -1) {
        setCurrentIndex(commandList.length - 1);
        setCurrentCommand(commandList[commandList.length - 1].command);
      } else if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
        setCurrentCommand(commandList[currentIndex - 1].command);
      }
    }
  } else if (e.key === "ArrowDown") {
    if (commandList.length > 0 && currentIndex !== -1) {
      if (currentIndex < commandList.length - 1) {
        setCurrentIndex(currentIndex + 1);
        setCurrentCommand(commandList[currentIndex + 1].command);
      } else {
        setCurrentIndex(-1);
        setCurrentCommand("");
      }
    }
  } else if (e.key === "Tab") {
    e.preventDefault();
    if (currentCommand.toLowerCase().startsWith("a")) {
      setCurrentCommand("about");
    } else if (currentCommand.toLowerCase().startsWith("p")) {
      setCurrentCommand("projects");
    } else if (currentCommand.toLowerCase().startsWith("c")) {
      setCurrentCommand("clear");
    } else if (currentCommand.toLowerCase().startsWith("b")) {
      setCurrentCommand("blogs");
    } else if (currentCommand.toLowerCase().startsWith("sk")) {
      setCurrentCommand("skills");
    } else if (currentCommand.toLowerCase().startsWith("so")) {
      setCurrentCommand("socials");
    } else if (currentCommand.toLowerCase().startsWith("r")) {
      setCurrentCommand("resume");
    } else if (currentCommand.toLowerCase().startsWith("g")) {
      setCurrentCommand("goals");
    } else if (currentCommand.toLowerCase().startsWith("su")) {
      setCurrentCommand("sudo rm -rf /*");
    } else if (currentCommand.toLowerCase().startsWith("h")) {
      setCurrentCommand("help");
    } else if (currentCommand.toLowerCase().startsWith("exi")) {
      setCurrentCommand("exit");
    } else if (currentCommand.toLowerCase().startsWith("exp")) {
      setCurrentCommand("experience");
    }
  }
}
