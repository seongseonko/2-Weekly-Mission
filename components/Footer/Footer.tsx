import BaseFooter from "./BaseFooter";
import styled from "styled-components";
import mediaQuery from "@/lib/MediaQuery";
import { Ref } from "react";

const Footer = styled(BaseFooter)<{ forwardRef?: Ref<HTMLDivElement> }>`
  display: flex;
  background-color: var(--black);
  font-size: 1.6rem;
  font-weight: 400;
  color: var(--white);
  justify-content: space-between;
  padding: 3.2rem 10.4rem 6.4rem;
  margin-top: 6rem;
  height: 16rem;
  ${mediaQuery.mobile} {
    display: grid;
    grid-template-areas:
      "FAQ link"
      "codeit .";
    row-gap: 60px;
  }
`;
export default Footer;
