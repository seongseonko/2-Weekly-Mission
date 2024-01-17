class AuthService {
  static isLoggedIn() {
    if (typeof localStorage !== "undefined") {
      const accessToken = localStorage.getItem("accessToken");
      return !!accessToken;
    }
    return false;
  }
}

export default AuthService;
