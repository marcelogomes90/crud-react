import styled from "styled-components";

const Button = styled.button`
  height: 44px;
  width: 120px;
  background-color: #4d3e6b;
  border: none;
  color: white;
  border-radius: 5px;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.1);

  &:hover {
    box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
  }
`;

export default Button;
