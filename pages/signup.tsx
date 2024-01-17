import styled from "styled-components";
import Logo from "@/public/head_logo.svg";
import StyledInput from "@/components/Sign/StyledInput";
import StyledButton from "@/components/Sign/StyledButton";
import offEye from "@/public/eye_off.svg";
import openEye from "@/public/eye-on.svg";
import kakao from "@/public/kakao.png";
import google from "@/public/google.png";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { postEmailCheck, postSignUp } from "@/components/Api/Api";
import AuthService from "@/components/Api/AuthService";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

const Article = styled.article`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding-top: 23.8rem;
  justify-content: center;
  align-items: center;
  gap: 3.2rem;
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
const PasswordCheckInput = styled(StyledInput)``;
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
export default function SignUp() {
  const router = useRouter();
  const isLoggedIn = AuthService.isLoggedIn();

  const [passwordOpen, setPasswordOpen] = useState({
    password: false,
    passwordCheck: false,
  });
  const [inputEmail, setInputEmail] = useState<string | null>(null);
  const [inputPassword, setPasswordInput] = useState<string | null>(null);
  const [inputPasswordCheck, setInputPasswordCheck] = useState<string | null>(
    null
  );
  const [errMessage, setErrorMessage] = useState("");
  const [emailEnable, setEmailEnable] = useState<{
    enable: boolean;
    hasEmail: boolean | null;
    emailCheck: boolean | null;
  }>({
    enable: false,
    hasEmail: null,
    emailCheck: null,
  });
  const [passwordEnable, setPasswordEnable] = useState<{
    hasPassword: boolean | null;
    hasPasswordCheck: boolean | null;
    passwordCompare: boolean | null;
    passwordResult: boolean | null;
  }>({
    hasPassword: null,
    hasPasswordCheck: null,
    passwordCompare: null,
    passwordResult: null,
  });

  const passwordOpenHandle = (type: "password" | "passwordCheck") => {
    setPasswordOpen((prev) => ({ ...prev, [type]: !prev[type] }));
  };

  const handleEmailCheck = async (e: ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    let result;
    setPasswordEnable((prev) => ({ ...prev, passwordCheck: null }));
    setEmailEnable((prev) => ({ ...prev, hasEmail: true }));
    setErrorMessage("");
    setEmailEnable((prev) => ({ ...prev, enable: false }));
    if (!email) {
      setEmailEnable((prev) => ({ ...prev, hasEmail: false }));
      return;
    }
    setInputEmail(email);
    try {
      result = await postEmailCheck(email);
      if (result) {
        setEmailEnable((prev) => ({ ...prev, enable: true }));
      }
    } catch (e: any) {
      setErrorMessage(e);
    }
  };

  const handlePassword = async (e: ChangeEvent<HTMLInputElement>) => {
    const password = e.target.value;
    setPasswordEnable((prev) => ({ ...prev, hasPassword: true }));
    if (!password) {
      setPasswordEnable((prev) => ({ ...prev, hasPassword: false }));
      return;
    }
    setPasswordInput(password);
  };
  const handlePasswordCheck = async (e: ChangeEvent<HTMLInputElement>) => {
    const passwordCheck = e.target.value;
    setPasswordEnable((prev) => ({
      ...prev,
      passwordCompare: true,
      hasPasswordCheck: true,
    }));
    if (!passwordCheck) {
      setPasswordEnable((prev) => ({ ...prev, hasPasswordCheck: false }));
      return;
    }
    setInputPasswordCheck(passwordCheck);
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if ((emailEnable.enable, passwordEnable.passwordCompare)) {
      const loginSuccess = await postSignUp(inputEmail, inputPasswordCheck);
      if (loginSuccess) {
        setEmailEnable((prev) => ({ ...prev, emailCheck: true }));
        setPasswordEnable((prev) => ({ ...prev, hasPasswordCheck: true }));
        router.push("/folder");
      } else {
        return;
      }
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      router.push("/folder");
    }
    if (inputPassword !== inputPasswordCheck) {
      setPasswordEnable((prev) => ({ ...prev, passwordCompare: false }));

      return;
    }
  }, [isLoggedIn, inputPassword, inputPasswordCheck, router]);

  return (
    <Article>
      <LoginField>
        <SignupLinkField>
          <Link href="/">
            <Image src={Logo} width={210.583} height={38} alt="logo" />
          </Link>
          <div>
            <span>이미 회원이신가요?</span>
            <StyledLink href="/signin">로그인 하기</StyledLink>
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
              $Enable={emailEnable.hasEmail}
            />
            {emailEnable.hasEmail === false && (
              <span>이메일을 입력하세요.</span>
            )}
            {emailEnable.emailCheck === false && (
              <span>이메일을 확인해 주세요.</span>
            )}
            <span>{errMessage}</span>
          </InputFiled>
          <InputFiled>
            비밀번호
            <div>
              <PasswordInput
                type={`${passwordOpen.password ? `text` : `password`}`}
                name="password"
                onBlur={handlePassword}
                onChange={handlePassword}
                $Enable={passwordEnable.hasPassword}
              />
              <Image
                src={passwordOpen.password ? openEye : offEye}
                onClick={() => passwordOpenHandle("password")}
                alt="감은눈"
              />
            </div>
            {passwordEnable.hasPassword === false && (
              <span>비밀번호를 입력하세요.</span>
            )}
            {passwordEnable.passwordResult === false && (
              <span>비밀번호를 확인해 주세요.</span>
            )}
          </InputFiled>
          <InputFiled>
            비밀번호
            <div>
              <PasswordCheckInput
                type={`${passwordOpen.passwordCheck ? `text` : `password`}`}
                name="password"
                onBlur={handlePasswordCheck}
                onChange={handlePasswordCheck}
                $Enable={passwordEnable.hasPasswordCheck}
              />
              <Image
                src={passwordOpen.passwordCheck ? openEye : offEye}
                onClick={() => passwordOpenHandle("passwordCheck")}
                alt="감은눈"
              />
            </div>
            {passwordEnable.hasPasswordCheck === false && (
              <span>비밀번호를 입력하세요.</span>
            )}
            {passwordEnable.passwordResult === false && (
              <span>비밀번호를 확인해 주세요.</span>
            )}
            {passwordEnable.hasPasswordCheck === true &&
              passwordEnable.passwordCompare === false && (
                <span>비밀번호가 일치하지 않아요</span>
              )}
          </InputFiled>
          <StyledButton type="submit">로그인</StyledButton>
        </InputFiledForm>
      </LoginField>
      <SocialField>
        <span>소셜로그인</span>
        <SocialLinkField>
          <SocialLink href="https://google.com" target="_blank">
            <Image src={google} alt="구글 로고" />
          </SocialLink>
          <SocialLink href="https://www.kakaocorp.com/page" target="_blank">
            <Image src={kakao} alt="카톡 로고" />
          </SocialLink>
        </SocialLinkField>
      </SocialField>
    </Article>
  );
}
