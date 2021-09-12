import { useState } from "react";

export const useTextField = (initialValue = "") => {
  const [value, setValue] = useState(initialValue);
  const setTextFieldValue = (
    input: string | React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    if (typeof input === "string") {
      setValue(input);
    } else {
      setValue(input.target.value);
    }
  };
  return [value, setTextFieldValue] as const;
};
