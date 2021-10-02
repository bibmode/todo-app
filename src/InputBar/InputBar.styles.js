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

  ::placeholder {
    font-size: inherit;
    font-family: inherit;
    color: #828282;
  }

  :focus {
    outline: none;
    border: 2px solid #2f80ed;
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
  border-radius: 1.2rem;
  background-color: #2f80ed;
`;
