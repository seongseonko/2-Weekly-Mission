import { Ref } from "react";
import FooterLink from "../FooterLink";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Codeit = styled.div`
  grid-area: codeit;
  color: #676767;
`;
const Faq = styled.div`
  display: flex;
  grid-area: FAQ;
  gap: 3rem;
`;
interface BaseFooterProps {
  className?: string;
  forwardRef?: Ref<HTMLDivElement>;
}

function BaseFooter({ className, forwardRef }: BaseFooterProps) {
  return (
    <footer className={className} ref={forwardRef}>
      <Codeit>©codeit - 2023</Codeit>
      <Faq>
        <Link to="/privacy" target="_blank">
          <div>Privacy Policy</div>
        </Link>
        <Link to="/faq" target="_blank">
          <div>FAQ</div>
        </Link>
      </Faq>
      <FooterLink />
    </footer>
  );
}
export default BaseFooter;
