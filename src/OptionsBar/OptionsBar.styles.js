import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #bdbdbd;
  position: relative;

  ::before {
    content: " ";
    background-color: #2f80ed;
    width: 8.9rem;
    height: 4px;
    position: absolute;
    bottom: -1px;
    //left: 10%;
    border-radius: 4px 4px 0px 0px;
    transition: all 0.3s ease;

    left: ${(props) => {
      if (props.status === "all") return "10%";
      if (props.status === "active") return "42.8%";
      if (props.status === "completed") return "75.9%";
    }};

    @media only screen and (max-width: 40.6em) {
      left: ${(props) => {
        if (props.status === "all") return "0%";
        if (props.status === "active") return "calc(50% - (8.9rem / 2))";
        if (props.status === "completed") return "calc(100% - 8.9rem)";
      }};
    }
  }
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  width: 81%;

  @media only screen and (max-width: 40.6em) {
    width: 100%;
  }
`;

export const Option = styled.button`
  border: none;
  outline: none;
  font-family: inherit;
  color: #333333;
  background-color: transparent;
  cursor: pointer;
  width: 8.9rem;

  padding-block: 1.8rem;
  font-size: 1.4rem;
  font-weight: 600;

  @media only screen and (max-width: 40.6em) {
    font-size: 1.2rem;
  }
`;
