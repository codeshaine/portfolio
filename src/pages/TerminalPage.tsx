import Terminal from "../components/Terminal";
import { GuiButton } from "../components/ui/GuiButton";

export default function TerminalPage() {
  return (
    <>
      <Terminal />
      <div className="text-white text-center pb-2  bg-[#191724] ">
        <GuiButton />
      </div>
    </>
  );
}
