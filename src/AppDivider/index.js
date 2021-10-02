import InputBar from "../InputBar";
import OptionsBar from "../OptionsBar";
import { Wrapper } from "./AppDivider.styles";

const AppDivider = () => {
  return (
    <Wrapper>
      <h1>#todo</h1>
      <OptionsBar />
      <InputBar />
    </Wrapper>
  );
};

export default AppDivider;
