import { useEffect, useState } from "react";
import { Add, Input, Wrapper } from "./InputBar.styles";

const InputBar = (props) => {
  const [value, setValue] = useState("");
  const [count, setCount] = useState(0);

  return (
    <Wrapper>
      <Input
        type="text"
        placeholder="add details"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <Add
        onClick={() => {
          setCount(count + 1);
          props.getValues(value, count);
        }}
      >
        Add
      </Add>
    </Wrapper>
  );
};

export default InputBar;
