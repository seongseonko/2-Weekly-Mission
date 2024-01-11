import link from "../images/link.svg";
import styled from "styled-components";
import mediaQuery from "../static/MediaQuery";
import { FormEvent } from "react";

const AddLinkContainer = styled.div`
  margin: 0 auto;
  background-color: var(--linkbrary-bg);
  padding: 60px 320px 90px 320px;
  ${mediaQuery.tablet} {
    padding: 60px 32px 90px 32px;
  }
  ${mediaQuery.mobile} {
    padding: 24px 32px 40px 32px;
  }
`;
const AddLinkForm = styled.form`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-radius: 15px;
  border: 1px solid var(--linkbrary-primary-color, #6d6afe);
  background: var(--linkbrary-white, #fff);
  padding: 16px 20px;
  ${mediaQuery.mobile} {
    padding: 8px 10px;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 37px;
    border-radius: 8px;
    background: var(
      --gra-purpleblue-to-skyblue,
      linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%)
    );
    color: var(--Grey-Light);
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;

const AddLinkFormLabel = styled.label`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 12px;
  ${mediaQuery.mobile} {
    gap: 8px;
  }
  input {
    border: none;
    outline: none;
    width: 100%;
  }
  img {
    width: 20px;
    height: 20px;
    ${mediaQuery.mobile} {
      width: 16px;
      height: 16px;
    }
  }
`;

function AddLink() {
  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };
  return (
    <AddLinkContainer>
      <AddLinkForm>
        <AddLinkFormLabel>
          <img src={link} alt="링크" />
          <input
            id="link"
            className="AddLinkInput"
            placeholder="링크를 추가해 보세요"
          />
        </AddLinkFormLabel>
        <button onSubmit={handleSubmit}>추가하기</button>
      </AddLinkForm>
    </AddLinkContainer>
  );
}
export default AddLink;
