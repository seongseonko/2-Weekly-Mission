class AuthService {
  static isLoggedIn() {
    const accessToken = localStorage.getItem("accessToken");
    return !!accessToken;
  }
}

export default AuthService;
