import { useContext } from "react";
import Idn from "../assets/Idn.svg";
import Us from "../assets/Us.svg";
import AppContext from "../contexts/AppContext";

const Translate = () => {
  const { translate, toggleTranslate } = useContext(AppContext);

  return (
    <button
      onClick={toggleTranslate}
      type="button"
      className="rounded-full p-3 outline-none hover:bg-black hover:bg-opacity-20"
    >
      <img src={translate === "id" ? Us : Idn} alt="flag" className="h-5 w-5" />
    </button>
  );
};

export default Translate;
