import { Checkbox, Wrapper } from "./Todo.styles";

const Todo = () => {
  return (
    <Wrapper>
      <Checkbox type="checkbox" id="check1" />
      <label htmlFor="check1">Do coding challenges</label>
      <span className="material-icons">check</span>
    </Wrapper>
  );
};

export default Todo;
