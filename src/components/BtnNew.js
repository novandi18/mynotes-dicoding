import { PlusIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const BtnNew = () => {
  return (
    <Link
      to="/notes/new"
      className="fixed bottom-0 right-0 mr-8 mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-blue-700 hover:bg-blue-800"
    >
      <PlusIcon className="h-7 w-7 text-gray-300" />
    </Link>
  );
};

export default BtnNew;
