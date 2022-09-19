import { useState } from "react";

const useAlert = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  const setTitle = (isOpen, title = "") => {
    setOpen(isOpen);
    setText(title);
  };

  return [{ isOpen: open, title: text }, setTitle];
};

export default useAlert;
