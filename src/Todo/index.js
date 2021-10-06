import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { Checkbox, Wrapper } from "./Todo.styles";

const Todo = ({ entry, id, seeChange, completed }) => {
  return (
    <Wrapper>
      <Checkbox
        defaultChecked={completed}
        type="checkbox"
        id={id}
        onChange={() => {
          seeChange(id);
        }}
      />
      <label htmlFor={id}>{entry}</label>
      <span className="material-icons">check</span>
    </Wrapper>
  );
};

export default Todo;
