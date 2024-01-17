import Head from "next/head";
import styled from "styled-components";
import AllLinkImage from "@/public/image 25.png";
import lampImage from "@/public/Card1.png";
import dogImage from "@/public/Card.png";
import SelectedCard from "@/public/Group 20.svg";
import badImage from "@/public/card-1.png";
import modal1 from "@/public/디스크립션 없는 팝업 1.png";
import modal2 from "@/public/img3 1.png";
import codeitScreen from "@/public/스크린샷 2023-03-17 오후 3.22 1.png";
import Footer from "@/components/Footer/Footer";
import Nav from "@/components/Header/Nav";
import Link from "next/link";
import Image from "next/image";

const Main = styled.main`
  display: flex;
  padding-top: 70px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 40px;
`;
const Title = styled.div``;
const InfoTitle = styled.h1`
  color: var(--black);
  font-family: Pretendard;
  font-size: 64px;
  font-style: normal;
  font-weight: 700;
  line-height: 80px;
  text-align: center;
`;
const InfoTitleAccent = styled.span`
  background: linear-gradient(91deg, #6d6afe 17.28%, #ff9f9f 74.98%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const LinkButton = styled.button`
  border-radius: 8px;
  background: var(
    --gra-purpleblue-to-skyblue,
    linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%)
  );
  display: flex;
  width: 35rem;
  padding: 1.6rem 2rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  color: var(--white);
  color: var(--Grey-Light);
  font-family: Pretendard;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  border: none;
`;

const ContentField = styled.div`
  width: 120rem;
  height: 59rem;
  padding-top: 5rem;
  display: flex;
  justify-content: center;
`;

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 12rem 0 5rem 0;
`;

const Container = styled.div`
  display: flex;
  gap: 15.7rem;
  justify-content: center;
  align-items: center;
  width: 99.8rem;
  height: 45rem;
`;

const ReverseContainer = styled.div`
  display: flex;
  gap: 15.7rem;
  justify-content: center;
  align-items: center;
  flex-direction: row-reverse;
  width: 99.8rem;
  height: 45rem;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 29.1rem;
  p {
    margin: 0;
    color: #6b6b6b;
    font-family: Pretendard;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 24px */
  }
`;

const ContentTitleField = styled.div`
  letter-spacing: -0.3rem;
  font-family: Pretendard;
`;
const SpanAccent = styled.span`
  background: ${({ children }) => {
    switch (children) {
      case "원하는 링크":
        return "linear-gradient(96deg, #fe8a8a 1.72%, #a4ceff 74.97%)";
      case "관리":
        return "linear-gradient(277deg, #6fbaff 59.22%, #ffd88b 93.66%)";
      case "공유":
        return "linear-gradient(99deg, #6D7CCD 19.76%, rgba(82, 136, 133, 0.22) 52.69%)";
      case "검색":
        return "linear-gradient(271deg, #484848 -9.84%, #68E8F9 107.18%)";
      default:
        return "linear-gradient(96deg, #fe8a8a 1.72%, #a4ceff 74.97%)";
    }
  }};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 4.8rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const Span = styled.span`
  font-size: 4.8rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const CardField = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 55rem;
  height: 45rem;
  overflow-x: hidden;
  border-radius: 15px;
  background: var(--bg);
`;
const ImgContainer = styled.div`
  display: flex;
  gap: 1.2rem;
  position: relative;

  img:nth-child(2) {
    border-radius: 11px;
    border: 2px solid var(--Linkbrary-primary-color, #6d6afe);
  }
  img:nth-child(3) {
    position: absolute;
    width: 4.6rem;
    height: 4.6rem;
    flex-shrink: 0;
    right: 23.5rem;
    bottom: -1rem;
  }
`;

export default function Home() {
  return (
    <>
      <Head>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://seongseonko.netlify.app/" />
        <meta property="og:title" content="Linkbrary" />
        <meta
          property="og:image"
          content="https://seongseonko.netlify.app/public/lotto.jpg"
        />
        <meta
          property="og:description"
          content="세상의 모든 정보를 쉽게 저장하고 관리해 보세요"
        />
        <meta property="og:site_name" content="Linkbrary" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <link href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css" />
        <title>Linkbrary</title>
      </Head>
      <Nav />
      <Main>
        <Title>
          <InfoTitle>
            <InfoTitleAccent>세상의 모든 정보</InfoTitleAccent>를<br />
            쉽게 저장하고 관리해 보세요
          </InfoTitle>
        </Title>
        <Link href="/signup" target="_blank">
          <LinkButton>링크 추가하기</LinkButton>
        </Link>
        <ContentField>
          <Image
            src={AllLinkImage}
            alt="링크들 전체 보기"
            width={1118}
            height={539}
          />
        </ContentField>
      </Main>
      <Section>
        <Container>
          <TextContainer>
            <ContentTitleField>
              <SpanAccent>원하는 링크</SpanAccent>
              <Span>
                를
                <br />
                저장하세요
              </Span>
            </ContentTitleField>
            <p>
              나중에 읽고 싶은 글, 다시 보고 싶은 영상, 사고 싶은 옷, 기억하고
              싶은 모든 것을 한 공간에 저장하세요.
            </p>
          </TextContainer>
          <CardField>
            <ImgContainer>
              <Image
                src={lampImage}
                alt="불켜진 전구 링크"
                width={244}
                height={239}
              />
              <Image
                src={dogImage}
                alt="프렌치 불독 링크"
                width={244}
                height={239}
              />
              <Image
                src={SelectedCard}
                alt="선택대상링크"
                width={244}
                height={239}
              />
              <Image src={badImage} alt="침실 링크" width={244} height={239} />
            </ImgContainer>
          </CardField>
        </Container>
      </Section>
      <Section>
        <ReverseContainer>
          <TextContainer>
            <ContentTitleField>
              <Span>
                링크를 폴더로
                <br />
                <SpanAccent>관리</SpanAccent>하세요
              </Span>
            </ContentTitleField>
            <p>나만의 폴더를 무제한으로 만들고 다양하게 활용할 수 있습니다.</p>
          </TextContainer>
          <CardField>
            <Image src={modal1} alt="폴더 이름변경" />
          </CardField>
        </ReverseContainer>
      </Section>
      <Section>
        <Container>
          <TextContainer>
            <ContentTitleField>
              <Span>
                저장한 링크를
                <br />
                <SpanAccent>공유</SpanAccent>해보세요
              </Span>
            </ContentTitleField>
            <p>중요한 정보들을 검색으로 쉽게 찾아보세요.</p>
          </TextContainer>
          <CardField>
            <Image src={modal2} alt="폴더 공유링크 카톡 페이스북 주소복사" />
          </CardField>
        </Container>
      </Section>
      <Section>
        <ReverseContainer>
          <TextContainer>
            <ContentTitleField>
              <Span>
                저장한 링크를
                <br />
                <SpanAccent>검색</SpanAccent>해 보세요
              </Span>
            </ContentTitleField>
            <p> 나만의 폴더를 무제한으로 만들고 다양하게 활용할 수 있습니다.</p>
          </TextContainer>
          <CardField>
            <Image
              src={codeitScreen}
              alt="코드잇 검색결과 코드잇 배너 및 코드"
            />
          </CardField>
        </ReverseContainer>
      </Section>
      <Footer />
    </>
  );
}
