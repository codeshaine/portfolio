export default function Header() {
  return (
    <div>
      <div className="w-full h-1/3 pb-2 text-sm lg:text-base">
        {/* prettier-ignore */}
        <pre className="whitespace-pre text-[#c4a7e7] text-xs mx-auto lg:text-xl ">
            {`
    ___   _             _          _   _
   / __| | |_    __ _  (_)  _ _   (_) | |
   \\__ \\ | ' \\  / _\` | | | | ' \\  | | | |
   |___/ |_||_| \\__,_| |_| |_||_| |_| |_|
  `}
          </pre>
        <p>Welcome to my portfolio!</p>
        <p>
          Type <span className="text-[#f6c177]">help</span> to get a list of
          available commands.
        </p>
        <p>
          Use <span className="text-[#f6c177]">↑</span> and{" "}
          <span className="text-[#f6c177]">↓</span> to navigate command history.
        </p>
      </div>
    </div>
  );
}
