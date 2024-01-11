import React from "react";
import styled from "styled-components";
import mediaQuery from "../static/MediaQuery";
import { SampleFolderData } from "../Pages/Shared/type";

const ProfileNav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  font-weight: 400;
`;
const ProfileImg = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 50%;
`;
const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--bg);
  img {
    width: 6rem;
    height: 6rem;
  }
  h2 {
    color: var(--black);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    margin: 12px 0 0;
  }
  p {
    margin: 20px 0 60px;
    color: var(--black);
    font-size: 40px;
    font-weight: 600;
    ${mediaQuery.mobile} {
      display: none;
    }
  }
`;

interface ProfileEmailProps {
  userData: {
    name: string;
    profileImageSource: string;
    email: string;
  };
}

function ProfileEmail({ userData }: ProfileEmailProps) {
  const alt = `${userData.name} 프로필 이미지`;
  return (
    <ProfileNav>
      <ProfileImg src={userData.profileImageSource} alt={alt} />
      <p>{userData.email}</p>
    </ProfileNav>
  );
}
interface ProfileProps {
  folderData: SampleFolderData;
}
function Profile({ folderData }: ProfileProps) {
  return (
    <ProfileContainer>
      <img src={folderData.owner.profileImageSource} alt="프로필이미지" />
      <h2>{folderData.owner.name}</h2>
      <p>{folderData.name}</p>
    </ProfileContainer>
  );
}

export { Profile, ProfileEmail };
