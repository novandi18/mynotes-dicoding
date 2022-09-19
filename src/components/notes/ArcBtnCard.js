import PropTypes from "prop-types";
import {
  archiveNote,
  getActiveNotes,
  getArchivedNotes,
  unarchiveNote,
} from "../../utils/network-data";
import { ArchiveBoxIcon, ArchiveBoxXMarkIcon } from "@heroicons/react/20/solid";

const ArcBtnCard = ({ id, type, setNote }) => {
  const onMove = async () => {
    const { error } =
      type === "active" ? await archiveNote(id) : await unarchiveNote(id);
    const { data } =
      type === "active" ? await getActiveNotes() : await getArchivedNotes();
    error ? alert("Failed to move") : setNote(data);
  };

  return (
    <button
      type="button"
      onClick={onMove}
      className="flex w-full items-center justify-center rounded-lg bg-green-600 py-2 transition-all duration-100 hover:bg-green-700 dark:bg-opacity-20 dark:hover:bg-opacity-50"
    >
      {type === "active" ? (
        <ArchiveBoxIcon className="h-5 w-5" />
      ) : (
        <ArchiveBoxXMarkIcon className="h-5 w-5" />
      )}
    </button>
  );
};

ArcBtnCard.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  setNote: PropTypes.func.isRequired,
};

export default ArcBtnCard;
