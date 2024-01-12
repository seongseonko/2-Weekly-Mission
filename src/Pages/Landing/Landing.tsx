import { Link } from "react-router-dom";
import styled from "styled-components";
import AllLinkImage from "../../images/image 25.png";
import lampImage from "../../images/Card1.png";
import dogImage from "../../images/Card.png";
import SelectedCard from "../../images/Group 20.svg";
import badImage from "../../images/card-1.png";
import modal1 from "../../images/디스크립션 없는 팝업 1.png";
import modal2 from "../../images/img3 1.png";
import codeitScreen from "../../images/스크린샷 2023-03-17 오후 3.22 1.png";
import Footer from "../../Components/Footer/Footer";
import Nav from "../../Components/Header/Nav";

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
  display: flex;
  justify-content: center;
`;

const ContentImg = styled.img`
  margin-top: 50px;
  width: calc(100% - 8.2rem);
  flex-shrink: 0;
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
  img {
    width: 24.4rem;
    height: 23.9rem;
    flex-shrink: 0;
  }
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
const ModalImg = styled.img`
  width: 41.4rem;
  height: 27rem;
`;
const CardLinkModal = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
const CodeitScreen = styled.img`
  width: 100%;
  height: 100%;
`;

function Landing() {
  return (
    <>
      <Nav />
      <Main>
        <Title>
          <InfoTitle>
            <InfoTitleAccent>세상의 모든 정보</InfoTitleAccent>를<br />
            쉽게 저장하고 관리해 보세요
          </InfoTitle>
        </Title>
        <Link to="/signup" target="_blank">
          <LinkButton>링크 추가하기</LinkButton>
        </Link>
        <ContentField>
          <ContentImg src={AllLinkImage} alt="링크들 전체 보기" />
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
              <img src={lampImage} alt="불켜진 전구 링크" />
              <img src={dogImage} alt="프렌치 불독 링크" />
              <img src={SelectedCard} alt="선택대상링크" />
              <img src={badImage} alt="침실 링크" />
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
            <ModalImg src={modal1} alt="폴더 이름변경" />
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
            <CardLinkModal
              src={modal2}
              alt="폴더 공유링크 카톡 페이스북 주소복사"
            />
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
            <CodeitScreen
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

export default Landing;
