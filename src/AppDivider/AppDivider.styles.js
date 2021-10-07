import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  width: 60.8rem;

  h1 {
    font-family: "Raleway", sans-serif;
    font-size: 3.6rem;
    font-weight: 700;
    margin-block: 3.2rem;
  }
`;

export const Todos = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Delete = styled.button`
  font-family: "Montserrat", sans-serif;
  font-size: 1.2rem;
  font-weight: 600;

  display: flex;
  align-items: center;
  justify-content: center;
  float: right;
  padding: 1.4rem 2.6rem;
  border-radius: 4px;
  background-color: #eb5757;
  cursor: pointer;
  color: #fff;
  outline: 0;
  border: 0;

  .material-icons-outlined {
    font-size: 1.4rem;
    font-weight: lighter;
    //-webkit-text-stroke: 0.5px white;
  }

  :hover {
    background-color: #bb3d3d;
  }
`;
