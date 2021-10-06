import { Wrapper, Option, List } from "./OptionsBar.styles";
import { Link } from "react-router-dom";
import { useState } from "react";

const OptionsBar = () => {
  const [status, setStatus] = useState("translateX(0rem)");

  return (
    <Wrapper position={status}>
      <List>
        <li>
          <Link to="/">
            <Option onClick={() => setStatus("translateX(0rem)")}>All</Option>
          </Link>
        </li>
        <li>
          <Link to="/active">
            <Option onClick={() => setStatus("translateX(20.3rem)")}>
              Active
            </Option>
          </Link>
        </li>
        <li>
          <Link to="/completed">
            <Option onClick={() => setStatus("translateX(40.4rem)")}>
              Completed
            </Option>
          </Link>
        </li>
      </List>
    </Wrapper>
  );
};

export default OptionsBar;
