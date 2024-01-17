import React from "react";
import styled from "styled-components";
import mediaQuery from "@/lib/MediaQuery";
import { SampleFolderData } from "@/type/type";
import Image from "next/image";

const ProfileNav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  font-weight: 400;
`;
const ProfileImage = styled.div`
  position: relative;
  width: 2.8rem;
  height: 2.8rem;
  border-radius: 50%;
  overflow: hidden;
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
const StyeldImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
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
      <ProfileImage>
        <StyeldImage src={userData.profileImageSource} alt={alt} fill />
      </ProfileImage>
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
      <Image
        src={folderData.owner.profileImageSource}
        alt="프로필이미지"
        width={28}
        height={28}
      />
      <h2>{folderData.owner.name}</h2>
      <p>{folderData.name}</p>
    </ProfileContainer>
  );
}

export { Profile, ProfileEmail };
