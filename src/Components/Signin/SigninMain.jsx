import styled from "styled-components";
import Logo from "../../images/head_logo.svg";
import { Link, useNavigate } from "react-router-dom";
import StyledInput from "../Sign/StyledInput";
import StyledButton from "../Sign/StyledButton";
import offEye from "../../images/eye_off.svg";
import openEye from "../../images/eye-on.svg";
import kakao from "../../images/kakao.png";
import google from "../../images/google.png";
import { useEffect, useState } from "react";
import { postSignIn } from "../Api/Api";
import AuthService from "../Api/AuthService";

const Article = styled.article`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding-top: 23.8rem;
  justify-content: center;
  align-items: center;
  gap: 3.2rem;
`;
const LogoImage = styled.img`
  width: 21.0583rem;
  height: 3.8rem;
`;
const LoginField = styled.div`
  width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;
const SignupLinkField = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;

  div {
    display: flex;
    gap: 1.2rem;
    color: var(--black);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
const InputFiled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  color: var(--black);
  font-family: Pretendard;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.4rem;
  div {
    position: relative;
  }
  img {
    position: absolute;
    width: 1.6rem;
    height: 1.6rem;
    right: 1.5rem;
    bottom: 2.15rem;
    &:hover {
      cursor: pointer;
    }
  }
  span {
    color: var(--Linkbrary-red, #ff5b56);
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
const InputFiledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;
const StyledLink = styled(Link)`
  text-decoration: underline;
  color: var(--primary-color);
  font-weight: 600;
  line-height: normal;
`;
const EmailInput = styled(StyledInput)``;
const PasswordInput = styled(StyledInput)``;
const SocialField = styled.div`
  display: flex;
  width: 40rem;
  padding: 1.2rem 2.4rem;
  justify-content: space-between;
  align-items: center;

  border-radius: 8px;
  border: 1px solid var(--gray20, #ccd5e3);
  background: var(--gray10, #e7effb);
  span {
    color: var(--gray100, #373740);
    font-family: Pretendard;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
const SocialLinkField = styled.div`
  display: flex;
  gap: 1.6rem;
`;
const SocialLink = styled(Link)`
  width: 42px;
  height: 42px;
  flex-shrink: 0;
  img {
    width: 42px;
    height: 42px;
    flex-shrink: 0;
  }
`;
function SigninMain() {
  const navigate = useNavigate();
  const isLoggedIn = AuthService.isLoggedIn();

  const [passwordOpen, setPasswordOpen] = useState(false);
  const [eyeIcon, setEyeIcon] = useState(offEye);
  const [hasEmail, setHasEmail] = useState(null);
  const [inputEmail, setInputEmail] = useState(null);
  const [emailCheck, setEmailCheck] = useState(null);
  const [hasPassword, setHasPassword] = useState(null);
  const [inputPassword, setPasswordInput] = useState(null);
  const [passwordCheck, setPasswordCheck] = useState(null);
  const passwordOpenHandle = () => {
    setPasswordOpen(!passwordOpen);
    setEyeIcon(passwordOpen ? offEye : openEye);
  };

  const handleEmailCheck = async (e) => {
    const email = e.target.value;
    setPasswordCheck(null);
    setHasEmail(true);
    if (!email) {
      setHasEmail(false);
      return;
    }
    setInputEmail(email);
  };
  const handlePasswordCheck = async (e) => {
    const password = e.target.value;
    setEmailCheck(null);
    setHasPassword(true);
    if (!password) {
      setHasPassword(false);
      return;
    }
    setPasswordInput(password);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const loginSuccess = await postSignIn(inputEmail, inputPassword);
    if (loginSuccess) {
      setEmailCheck(true);
      setPasswordCheck(true);
      window.location.href = "/folder";
    } else {
      setEmailCheck(false);
      setPasswordCheck(false);
      return;
    }
  };
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/folder");
    }
  }, [isLoggedIn, navigate]);

  return (
    <Article>
      <LoginField>
        <SignupLinkField>
          <Link to="/">
            <LogoImage src={Logo} />
          </Link>
          <div>
            <span>회원이 아니신가요? </span>
            <StyledLink to="/Signup">회원 가입하기</StyledLink>
          </div>
        </SignupLinkField>
        <InputFiledForm onSubmit={handleSubmit}>
          <InputFiled>
            이메일
            <EmailInput
              type="email"
              name="email"
              placeholder="codeit@codeit.com"
              onBlur={handleEmailCheck}
              onChange={handleEmailCheck}
              $Enable={hasEmail}
            />
            {hasEmail === false && <span>이메일을 입력하세요.</span>}
            {emailCheck === false && <span>이메일을 확인해 주세요.</span>}
          </InputFiled>
          <InputFiled>
            비밀번호
            <div>
              <PasswordInput
                type={`${passwordOpen ? `text` : `password`}`}
                name="password"
                placeholder="1231231"
                onBlur={handlePasswordCheck}
                onChange={handlePasswordCheck}
                $Enable={hasPassword}
              />
              <img src={eyeIcon} onClick={passwordOpenHandle} alt="감은눈" />
            </div>
            {hasPassword === false && <span>비밀번호를 입력하세요.</span>}
            {passwordCheck === false && <span>비밀번호를 확인해 주세요.</span>}
          </InputFiled>
          <StyledButton type="submit">로그인</StyledButton>
        </InputFiledForm>
      </LoginField>
      <SocialField>
        <span>소셜로그인</span>
        <SocialLinkField>
          <SocialLink to="https://google.com" target="_blank">
            <img src={google} alt="구글 로고" />
          </SocialLink>
          <SocialLink to="https://www.kakaocorp.com/page" target="_blank">
            <img src={kakao} alt="카톡 로고" />
          </SocialLink>
        </SocialLinkField>
      </SocialField>
    </Article>
  );
}
export default SigninMain;
