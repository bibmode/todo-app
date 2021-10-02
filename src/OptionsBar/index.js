import { Wrapper, Option, List } from "./OptionsBar.styles";

const OptionsBar = () => {
  return (
    <Wrapper>
      <List>
        <li>
          <Option>All</Option>
        </li>
        <li>
          <Option>Active</Option>
        </li>
        <li>
          <Option>Completed</Option>
        </li>
      </List>
    </Wrapper>
  );
};

export default OptionsBar;
