import { ArrowRightOnRectangleIcon } from "@heroicons/react/20/solid";
import { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../contexts/AppContext";
import Mode from "./Mode";
import Translate from "./Translate";
import PropTypes from "prop-types";

const Navbar = ({ logout, name }) => {
  const { translate } = useContext(AppContext);

  return (
    <nav className="flex items-center justify-between border-b-2 border-gray-400 py-2 px-5 dark:border-gray-600">
      <Link to="/" className="text-lg font-semibold">
        {translate === "id" ? "Catatanku" : "My Notes"}
      </Link>
      <div className="flex items-center gap-1">
        <Link
          className="rounded border border-transparent px-4 py-2 hover:border-gray-700"
          to="archive"
        >
          {translate === "id" ? "Arsip" : "Archive"}
        </Link>
        <Translate />
        <Mode />
        {name === null ? (
          <span>Loading...</span>
        ) : (
          <button
            type="button"
            onClick={logout}
            className="flex items-center gap-2 rounded-lg py-2 px-3 hover:bg-black hover:bg-opacity-20"
          >
            <span className="hidden text-sm sm:flex">{name}</span>
            <ArrowRightOnRectangleIcon className="h-4 w-4" />
          </button>
        )}
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  name: PropTypes.string,
};

export default Navbar;
