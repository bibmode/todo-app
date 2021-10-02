import InputBar from "../InputBar";
import OptionsBar from "../OptionsBar";
import Todo from "../Todo";
import { Todos, Wrapper } from "./AppDivider.styles";

const AppDivider = () => {
  return (
    <Wrapper>
      <h1>#todo</h1>
      <OptionsBar />
      <InputBar />
      <Todos>{/* <Todo /> */}</Todos>
    </Wrapper>
  );
};

export default AppDivider;
