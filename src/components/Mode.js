import { MoonIcon, SunIcon } from "@heroicons/react/20/solid";
import { useContext } from "react";
import AppContext from "../contexts/AppContext";

const Mode = () => {
  const { mode, switchMode } = useContext(AppContext);

  return (
    <button
      onClick={switchMode}
      type="button"
      className="rounded-full p-3 outline-none hover:bg-black hover:bg-opacity-20"
    >
      {mode === "dark" ? (
        <SunIcon className="h-5 w-5" />
      ) : (
        <MoonIcon className="h-5 w-5" />
      )}
    </button>
  );
};

export default Mode;
