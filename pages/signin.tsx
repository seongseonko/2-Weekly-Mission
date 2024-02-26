import styled from "styled-components";
import Logo from "@/public/head_logo.svg";
import StyledButton from "@/components/Sign/StyledButton";
import kakao from "@/public/kakao.png";
import google from "@/public/google.png";
import { useEffect } from "react";
import { postSignIn } from "@/components/Api/Api";
import AuthService from "@/components/Api/AuthService";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import {
  FieldValues,
  SubmitHandler,
  UseFormSetError,
  useFormContext,
} from "react-hook-form";
import InputField from "@/components/Common/InputField";

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
export default function Signin() {
  const router = useRouter();
  const isLoggedIn = AuthService.isLoggedIn();
  const { handleSubmit, setError } = useFormContext();
  const onSubmit: SubmitHandler<FieldValues> = (value: FieldValues) => {
    postSignIn(value, setError as UseFormSetError<FieldValues>);
  };

  useEffect(() => {
    if (isLoggedIn) {
      router.push("/folder");
    }
  }, [isLoggedIn, router]);

  return (
    <Article>
      <LoginField>
        <SignupLinkField>
          <Link href="/">
            <Image src={Logo} width={210.583} height={38} alt="logo" />
          </Link>
          <div>
            <span>회원이 아니신가요? </span>
            <StyledLink href="/signup">회원 가입하기</StyledLink>
          </div>
        </SignupLinkField>
        <InputFiledForm onSubmit={handleSubmit(onSubmit)}>
          <InputField
            label="이메일"
            name="email"
            type="email"
            placeholder="example@example.com"
            defaultValue=""
            maxLength={30}
          />
          <InputField
            label="비밀번호"
            name="password"
            type="password"
            placeholder="********"
            defaultValue=""
            maxLength={15}
          />
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
