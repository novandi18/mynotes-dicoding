import { useState } from "react";

const useInput = (val = "") => {
  const [value, setValue] = useState(val);

  const valHandler = (e) => {
    setValue(e.target.value);
  };

  return [value, valHandler];
};

export default useInput;
