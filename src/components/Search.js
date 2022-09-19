import { useContext } from "react";
import AppContext from "../contexts/AppContext";

const Search = () => {
  const { translate, search, setSearch } = useContext(AppContext);

  const letSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="mt-3">
      <input
        onChange={letSearch}
        value={search}
        type="text"
        placeholder={
          translate === "id"
            ? "Cari berdasarkan judul ..."
            : "Search by title..."
        }
        className="w-full rounded border-2 border-gray-300 bg-gray-300 py-2 px-4 text-sm text-gray-700 outline-none transition-all duration-100 focus:border-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-gray-300 focus:dark:border-blue-700"
      />
    </div>
  );
};

export default Search;
