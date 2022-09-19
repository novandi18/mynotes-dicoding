import { TrashIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
import { deleteNote } from "../utils/network-data";
import PropTypes from "prop-types";

const BtnDelete = ({ id }) => {
  const navigate = useNavigate();

  const setDeleted = () => {
    deleteNote(id);
    navigate("/");
  };

  return (
    <button
      onClick={setDeleted}
      type="button"
      className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-300 hover:bg-gray-400"
    >
      <TrashIcon className="h-7 w-7 text-gray-800" />
    </button>
  );
};

BtnDelete.propTypes = {
  id: PropTypes.string,
};

export default BtnDelete;
