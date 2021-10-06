import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { Add, Input, Wrapper } from "./InputBar.styles";

const InputBar = (props) => {
  const [value, setValue] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    const listener = (event) => {
      if (event.code === "Enter") {
        event.preventDefault();
        setCount(count + 1);
        props.getValues(value, count);
        setValue("");
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  });

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
        accessKey="13"
        onClick={() => {
          setCount(count + 1);
          props.getValues(value, count);
          setValue("");
        }}
      >
        Add
      </Add>
    </Wrapper>
  );
};

export default InputBar;
