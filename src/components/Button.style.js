import styled from "styled-components";

export const Button = styled.button`
  width: ${(props) => (props.large ? "500px" : "auto")};
  padding: 10px;
  border: none;
  border-radius: 5px;
  background: ${(props) => (props.color ? props.color : "tomato")};
  box-shadow: 8px 8px 8px lightgrey;
  color: white;

  &:hover {
    cursor: pointer;
    background: ${(props) => (props.darkColor ? props.darkColor : "#DD403A")};
  }
`;
