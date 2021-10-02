import { useEffect, useState } from "react";
import { Add, Input, Wrapper } from "./InputBar.styles";

const InputBar = () => {
  const [value, setValue] = useState("");

  useEffect(() => {
    //console.log(value);
  }, [value]);

  const getValue = () => {
    console.log(value);
  };

  return (
    <Wrapper>
      <Input
        type="text"
        placeholder="add details"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <Add onClick={getValue}>Add</Add>
    </Wrapper>
  );
};

export default InputBar;
