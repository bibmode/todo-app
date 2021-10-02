import { useEffect, useState } from "react";
import { Add, Input, Wrapper } from "./InputBar.styles";

const InputBar = (props) => {
  const [value, setValue] = useState("");

  return (
    <Wrapper>
      <Input
        type="text"
        placeholder="add details"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <Add onClick={() => props.getValue(value)}>Add</Add>
    </Wrapper>
  );
};

export default InputBar;
