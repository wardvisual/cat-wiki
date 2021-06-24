import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 0.8rem 1.5rem 0.8rem 1.5rem;
  border: none;
  outline: none;
  border-radius: var(--radius);
  font-size: 1rem;
  letter-spacing: 2px;
  cursor: pointer;
  background: ${({ primary }) =>
    !primary ? "var(--light-blue)" : "var(--light-2)"};
  color: ${({ primary }) => (!primary ? "var(--light-2)" : "var(--dark)")};
`;
const Button = ({ primary, text, onClick }) => {
  return (
    <StyledButton primary={primary} onClick={onClick}>
      {text}
    </StyledButton>
  );
};

export default Button;
