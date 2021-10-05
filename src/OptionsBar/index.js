import { Wrapper, Option, List } from "./OptionsBar.styles";
import { Link } from "react-router-dom";

const OptionsBar = (props) => {
  return (
    <Wrapper>
      <List>
        <li>
          <Link to="/">
            <Option onClick={() => console.log("all")}>All</Option>
          </Link>
        </li>
        <li>
          <Link to="/active">
            <Option onClick={() => console.log("active")}>Active</Option>
          </Link>
        </li>
        <li>
          <Link to="/completed">
            <Option onClick={() => console.log("completed")}>Completed</Option>
          </Link>
        </li>
      </List>
    </Wrapper>
  );
};

export default OptionsBar;
