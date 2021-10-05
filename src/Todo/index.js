import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { Checkbox, Wrapper } from "./Todo.styles";

const Todo = ({ entry, id, seeChange }) => {
  const [crossed, setCrossed] = useState(true);

  return (
    <Wrapper>
      <Checkbox
        type="checkbox"
        id={id}
        onChange={() => {
          setCrossed(!crossed);
          seeChange(id, crossed);
        }}
      />
      <label htmlFor={id}>{entry}</label>
      <span className="material-icons">check</span>
    </Wrapper>
  );
};

export default Todo;
