import { showFormattedDate, showFormattedDateEng } from "../utils/local-data";
import NoteCard from "./notes/NoteCard";
import PropTypes from "prop-types";
import { useState } from "react";
import { useEffect } from "react";
import { getActiveNotes, getArchivedNotes } from "../utils/network-data";
import { useContext } from "react";
import AppContext from "../contexts/AppContext";
import NoteCardSkeleton from "./skeleton/NoteCardSkeleton";

const ListNotes = ({ type, translate }) => {
  const { search } = useContext(AppContext);
  const [result, setResult] = useState(null);

  useEffect(() => {
    const getNotes = async () => {
      const { data, error } =
        type === "active" ? await getActiveNotes() : await getArchivedNotes();
      if (error === false) setResult(data);
    };

    getNotes();
  }, []);

  return (
    <>
      {result ? (
        result.length ? (
          <section className="grid grid-cols-2 gap-3 pt-5 pb-10 lg:grid-cols-4">
            {result
              .filter((r) =>
                r.title.toLowerCase().includes(search.toLowerCase())
              )
              .map((note, i) => (
                <div key={i}>
                  <NoteCard
                    title={note.title}
                    date={
                      translate === "id"
                        ? showFormattedDate(note.createdAt)
                        : showFormattedDateEng(note.createdAt)
                    }
                    text={note.body}
                    id={note.id}
                    type={type}
                    setNote={setResult}
                  />
                </div>
              ))}
          </section>
        ) : (
          <section className="flex justify-center py-5">
            <span className="text-xl text-gray-500">
              {translate === "id" ? "Tidak ada catatan" : "No notes"}
            </span>
          </section>
        )
      ) : (
        <section className="grid grid-cols-2 gap-3 pt-5 pb-10 lg:grid-cols-4">
          <NoteCardSkeleton />
          <NoteCardSkeleton />
          <NoteCardSkeleton />
          <NoteCardSkeleton />
        </section>
      )}
    </>
  );
};

ListNotes.propTypes = {
  type: PropTypes.string,
  translate: PropTypes.string,
};

export default ListNotes;
