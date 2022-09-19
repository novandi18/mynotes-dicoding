import {
  ArchiveBoxArrowDownIcon,
  ArchiveBoxXMarkIcon,
} from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { archiveNote, unarchiveNote } from "../utils/network-data";

const BtnArchive = ({ id, isArchived }) => {
  const navigate = useNavigate();

  const setArchivedNote = async () => {
    const { error, data } = isArchived
      ? await unarchiveNote(id)
      : await archiveNote(id);
    error ? alert(data) : navigate("/");
  };

  return (
    <button
      onClick={setArchivedNote}
      type="button"
      className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-300 hover:bg-gray-400"
    >
      {isArchived ? (
        <ArchiveBoxXMarkIcon className="h-7 w-7 text-gray-800" />
      ) : (
        <ArchiveBoxArrowDownIcon className="h-7 w-7 text-gray-800" />
      )}
    </button>
  );
};

BtnArchive.propTypes = {
  id: PropTypes.string.isRequired,
  isArchived: PropTypes.bool.isRequired,
};

export default BtnArchive;
