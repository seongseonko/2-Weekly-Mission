import { createGlobalStyle } from "styled-components";
import Landing from "./Pages/Landing/Landing";
import Shared from "./Pages/Shared/Shared";
import Folder from "./Pages/Folder/Folder";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Signin from "./Pages/SignIn/Signin";
import Signup from "./Pages/Signup/Signup";
import AuthService from "./Components/Api/AuthService";

const GlobalStyle = createGlobalStyle`
  :root{
    --primary-color: #6d6ae6;
    --red: #ff5b56;
    --black: #111322;
    --white: #ffffff;
    --gray100: #3e3e43;
    --gray60: #9fa6b2;
    --gray20: #CCD5E3;
    --gray10: #E7EFFB;
    --bg: #F0F6FF;
    --Grey-Light: #f5f5f5;
    --Linkbrary-primary-color: #6D6AFE;
  }
  * {
    font-family: "Pretendard", sans-serif;
    box-sizing: border-box;
    margin: 0;
  }
  html,
  body {
    font-size: 62.5%;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  button{
    border: none;

  }
  button:hover{
    cursor: pointer;
  }
`;

function App() {
  const isLoggedIn = AuthService.isLoggedIn();
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="signin" element={<Signin />} />
        <Route path="signup" element={<Signup />} />
        {isLoggedIn ? (
          <>
            <Route path="shared" element={<Shared />} />
            <Route path="folder" element={<Folder />} />
          </>
        ) : (
          <Route path="/" element={<Navigate to="/signin" replace />} />
        )}
      </Routes>
    </BrowserRouter>
  );
}
export default App;
