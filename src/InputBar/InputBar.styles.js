import styled from "styled-components";

export const Wrapper = styled.div`
  font-size: 1.4rem;
  display: flex;
  justify-content: space-between;
  margin-block: 1.8rem 3.2rem;
  width: 100%;
`;

export const Input = styled.input`
  font-size: inherit;
  border: 1px solid #bdbdbd;
  border-radius: 1.2rem;
  width: 78%;
  padding-inline: 1.2rem;

  @media only screen and (max-width: 40.6em) {
    width: 75%;
  }

  ::placeholder {
    font-size: inherit;
    font-family: inherit;
    color: #828282;
  }

  :focus {
    outline: none;
    border: 2px solid #2f80ed;
    margin: -1px;
  }
`;

export const Add = styled.button`
  font-size: inherit;
  font-family: inherit;
  font-weight: 600;
  color: #fff;

  border: none;
  outline: none;
  padding: 2rem 4rem;
  text-align: center;
  border-radius: 1.2rem;
  background-color: #2f80ed;
  cursor: pointer;

  @media only screen and (max-width: 40.6em) {
    width: 20%;
    padding: 1.2rem 0;
  }

  transition: all 0.3s ease;

  :hover {
    background-color: #115ab9;
  }
`;
