import { useState, useEffect } from "react";
import { Add, Input, Wrapper } from "./InputBar.styles";

const InputBar = (props) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    const listener = (event) => {
      if (event.code === "Enter" && value.trim() !== "") {
        event.preventDefault();
        props.getValues(value);
        setValue("");
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [value, props]);

  return (
    <Wrapper>
      <Input
        type="text"
        placeholder="add details"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <Add
        onClick={() => {
          if (value.trim() !== "") props.getValues(value);
          setValue("");
        }}
      >
        Add
      </Add>
    </Wrapper>
  );
};

export default InputBar;
