import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { showFormattedDate, showFormattedDateEng } from "../utils/local-data";
import parser from "html-react-parser";
import BtnArchive from "../components/BtnArchive";
import BtnDelete from "../components/BtnDelete";
import AppContext from "../contexts/AppContext";
import { useState } from "react";
import { getNote } from "../utils/network-data";
import NoteSkeleton from "../components/skeleton/NoteSkeleton";

const Notes = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const { translate } = useContext(AppContext);

  useEffect(() => {
    document.title = data === null ? "Detail catatan" : data.title;
    getNoteById();
  }, [data]);

  const getNoteById = async () => {
    const { data, error } = await getNote(id);
    error ? alert(data) : setData(data);
  };

  if (data === null) {
    return <NoteSkeleton />;
  } else {
    return (
      <section className="py-10">
        <div className="pb-3">
          <span className="text-5xl font-semibold text-gray-700 dark:text-gray-300">
            {data.title}
          </span>
        </div>
        <div className="pb-5">
          <span className="text-gray-600 dark:text-gray-400">
            {translate === "id"
              ? showFormattedDate(data.createdAt)
              : showFormattedDateEng(data.createdAt)}
          </span>
        </div>
        <div
          className="text-gray-700 outline-none dark:text-gray-300"
          suppressContentEditableWarning={true}
        >
          {parser(data.body)}
        </div>

        <div className="fixed bottom-0 right-0 mr-8 mb-8 flex gap-3">
          <BtnArchive id={id} isArchived={data.archived} />
          <BtnDelete id={id} />
        </div>
      </section>
    );
  }
};

export default Notes;
