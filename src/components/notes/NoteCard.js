import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import parser from "html-react-parser";
import ArcBtnCard from "./ArcBtnCard";
import DelBtnCard from "./DelBtnCard";

const NoteCard = ({ title, date, text, id, type, setNote }) => {
  return (
    <div className="flex h-72 flex-col justify-between rounded-lg border-2 border-gray-400 px-4 pb-4 dark:border-gray-700">
      <div className="flex flex-col">
        <div className="pt-3 pb-1 line-clamp-1">
          <Link
            to={`/notes/${id}`}
            className="font-bold text-gray-700 hover:underline dark:text-gray-300"
          >
            {title}
          </Link>
        </div>
        <span className="text-sm text-gray-600 dark:text-gray-400">{date}</span>
        <div className="pt-3 text-gray-700 line-clamp-6 dark:text-gray-300">
          {parser(text)}
        </div>
      </div>
      <div className="flex gap-2 text-sm text-gray-100 dark:text-gray-300">
        <ArcBtnCard id={id} type={type} setNote={setNote} />
        <DelBtnCard id={id} type={type} setNote={setNote} />
      </div>
    </div>
  );
};

NoteCard.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  setNote: PropTypes.func.isRequired,
};

export default NoteCard;
