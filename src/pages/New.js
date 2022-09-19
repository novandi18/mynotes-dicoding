import { CheckIcon } from "@heroicons/react/24/solid";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addNote } from "../utils/network-data";
import AppContext from "../contexts/AppContext";

const New = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const navigate = useNavigate();
  const { translate } = useContext(AppContext);

  useEffect(() => {
    document.title = "Buat Catatan Baru";
  }, []);

  const submit = async (e) => {
    e.preventDefault();

    const { error } = await addNote({ title: title, body: text });
    if (!error) navigate("/");
  };

  const toPlainText = (e) => {
    e.preventDefault();
    const txt = e.clipboardData.getData("text/plain");
    e.target.innerHTML = txt;
  };

  return (
    <section className="py-10">
      <form onSubmit={submit}>
        <input
          type="text"
          className="mb-3 w-full rounded-lg bg-transparent py-2 px-4 text-5xl font-semibold text-gray-700 outline-none hover:bg-gray-300 dark:text-gray-300 dark:hover:bg-gray-800"
          placeholder={translate === "id" ? "Judul" : "Title"}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div
          contentEditable
          className="h-screen overflow-auto rounded-lg bg-gray-300 py-2 px-4 text-xl text-gray-700 outline-none dark:bg-gray-800 dark:bg-opacity-40 dark:text-gray-300"
          onInput={(e) => setText(e.target.innerHTML)}
          onPaste={toPlainText}
        ></div>

        <button className="fixed bottom-0 right-0 mr-8 mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-green-700 hover:bg-green-800">
          <CheckIcon className="h-7 w-7 text-gray-300" />
        </button>
      </form>
    </section>
  );
};

export default New;
