import { useEffect } from "react";
import { Checkbox, Wrapper } from "./Todo.styles";

const Todo = ({ entry }) => {
  return (
    <Wrapper>
      <Checkbox type="checkbox" id="check1" />
      <label htmlFor="check1">{entry}</label>
      <span className="material-icons">check</span>
    </Wrapper>
  );
};

export default Todo;
