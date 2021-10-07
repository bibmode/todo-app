import { Wrapper, Option, List } from "./OptionsBar.styles";
import { Link } from "react-router-dom";
import { useState } from "react";

const OptionsBar = () => {
  const [status, setStatus] = useState("all");

  return (
    <Wrapper status={status}>
      <List>
        <li>
          <Link to="/">
            <Option onClick={() => setStatus("all")}>All</Option>
          </Link>
        </li>
        <li>
          <Link to="/active">
            <Option onClick={() => setStatus("active")}>Active</Option>
          </Link>
        </li>
        <li>
          <Link to="/completed">
            <Option onClick={() => setStatus("completed")}>Completed</Option>
          </Link>
        </li>
      </List>
    </Wrapper>
  );
};

export default OptionsBar;
