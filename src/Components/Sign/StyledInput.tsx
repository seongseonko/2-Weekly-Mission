import styled from "styled-components";

const StyledInput = styled.input<{ $Enable: boolean | null }>`
  position: relative;
  display: flex;
  width: 400px;
  padding: 18px 15px;
  justify-content: center;
  align-items: center;

  border-radius: 8px;
  border: 1px solid
    ${({ $Enable }) =>
      $Enable === false ? `var(--Linkbrary-red, #ff5b56)` : `var(--gray20)`};
  background: var(--white);

  &:focus {
    outline: none;
    border-color: var(--primary-color);
  }
`;

export default StyledInput;
