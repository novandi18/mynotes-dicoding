import { TrashIcon } from "@heroicons/react/20/solid";
import PropTypes from "prop-types";
import {
  deleteNote,
  getActiveNotes,
  getArchivedNotes,
} from "../../utils/network-data";

const DelBtnCard = ({ id, type, setNote }) => {
  const onDelete = async () => {
    const { error } = await deleteNote(id);
    const { data } =
      type === "active" ? await getActiveNotes() : await getArchivedNotes();
    error ? alert("Failed to delete note") : setNote(data);
  };

  return (
    <button
      type="button"
      onClick={onDelete}
      className="g-red-600 dark:hover: flex w-full items-center justify-center rounded-lg bg-red-600 py-2 transition-all duration-100 hover:bg-red-700 dark:bg-opacity-20 dark:hover:bg-opacity-50"
    >
      <TrashIcon className="h-5 w-5" />
    </button>
  );
};

DelBtnCard.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  setNote: PropTypes.func.isRequired,
};

export default DelBtnCard;
