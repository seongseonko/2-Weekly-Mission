import FooterLink from "../FooterLink";
import { Link } from "react-router-dom";
import styled from "styled-components";
import mediaQuery from "../../static/MediaQuery";

const Footer = styled(BaseFooter)`
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
const Codeit = styled.div`
  grid-area: codeit;
  color: #676767;
`;
const Faq = styled.div`
  display: flex;
  grid-area: FAQ;
  gap: 3rem;
`;
function BaseFooter({ className }) {
  return (
    <footer className={className}>
      <Codeit>©codeit - 2023</Codeit>
      <Faq>
        <Link to="/privacy" target="_blank">
          <div>Privacy Policy</div>
        </Link>
        <Link to="/faq" target="_blank">
          <div>FAQ</div>
        </Link>
      </Faq>
      <FooterLink className="FooterLink" />
    </footer>
  );
}
export default Footer;
