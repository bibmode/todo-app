import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 2.5rem;

  label {
    font-size: 1.8rem;
    font-weight: 500;
    margin-left: 2rem;
    cursor: pointer;
    position: relative;

    ::after {
      content: " ";
      height: 1px;
      background-color: #333333;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(50%);
    }
  }

  span {
    position: absolute;
    left: 0;
    color: #fff;
    background-color: #2f80ed;
    border-radius: 4px;
    opacity: 0;
  }
`;

export const Checkbox = styled.input`
  visibility: hidden;
  cursor: pointer;

  ::before {
    content: " ";
    visibility: visible;
    width: 2.4rem;
    height: 2.4rem;
    border-radius: 4px;
    border: 1px solid #828282;
    position: absolute;
    top: 2px;
    z-index: 101;

    :hover {
      border: 1px solid #2f80ed;
    }
  }

  :checked ~ span {
    opacity: 1;
  }

  :checked + label::after {
    animation: line-through 0.3s ease;
    width: 100%;
  }

  @keyframes line-through {
    0% {
      width: 0;
    }
    100% {
      width: 100%;
    }
  }
`;
