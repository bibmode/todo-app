import { Add, Input, Wrapper } from "./InputBar.styles";

const InputBar = () => {
  return (
    <Wrapper>
      <Input type="text" placeholder="add details" />
      <Add>Add</Add>
    </Wrapper>
  );
};

export default InputBar;
