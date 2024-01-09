import React, { useEffect, useState } from "react";
import linkbrary from "../../images/linkbrary.svg";
import { getProfileData } from "../Api";
import { ProfileEmail } from "../Profile";
import { Link } from "react-router-dom";
import styled from "styled-components";
import mediaQuery from "../../static/MediaQuery";
import AuthService from "../Api/AuthService";

const NavBar = styled.nav`
  background-color: var(--bg);
  position: ${({ $sticky }) => {
    return $sticky === "off" ? "static" : "sticky";
  }};
  top: 0;
  z-index: 1;
`;
const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3.3rem 20rem 3.2rem;
  ${mediaQuery.mobile} {
    padding: 1.8rem 3.2rem 1.7rem;
  }
`;
const Logo = styled.img`
  width: 13.3rem;
  height: 2.4rem;
  ${mediaQuery.mobile} {
    width: 8.8667rem;
    width: 8.8667rem;
  }
`;
const Button = styled.button`
  display: flex;
  width: 12.8rem;
  padding: 1.6rem 2rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border-radius: 0.8rem;
  background: var(
    --gra-purpleblue-to-skyblue,
    linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%)
  );
  color: var(--Grey-Light);
  font-family: Pretendard;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

function Nav({ sticky }) {
  const [userData, setUserData] = useState(null);
  const dataLoad = async () => {
    let result;
    try {
      setUserData(null);
      result = await getProfileData();
      setUserData(result);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    if (AuthService.isLoggedIn()) {
      dataLoad();
    }
  }, []);

  return (
    <NavBar $sticky={sticky}>
      <NavContainer>
        <Link to="/">
          <Logo src={linkbrary} alt="로고Linkbrary" />
        </Link>
        <div>
          {userData ? (
            <ProfileEmail userData={userData} />
          ) : (
            <Link to="/signin">
              <Button>로그인</Button>
            </Link>
          )}
        </div>
      </NavContainer>
    </NavBar>
  );
}
export default Nav;
