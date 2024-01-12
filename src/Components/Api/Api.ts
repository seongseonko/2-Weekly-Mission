const BASE_URL = "https://bootcamp-api.codeit.kr";
const URL_SIGN_IN = `${BASE_URL}/api/sign-in`;
const URL_SIGN_UP = `${BASE_URL}/api/sign-up`;
const URL_EMAIL_CHECK = `${BASE_URL}/api/check-email`;

export async function postEmailCheck(email: string) {
  try {
    const response = await fetch(URL_EMAIL_CHECK, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if (response.status > 400) {
      const error = await response.json();
      return error;
    }

    const result = await response.json();
    return result;
  } catch (e) {
    console.error(e);
    throw e;
  }
}

export async function postSignIn(
  email: string | null,
  password: string | null
) {
  try {
    const response = await fetch(URL_SIGN_IN, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    let result;
    if (response.status === 200) {
      result = await response.json();
      const accessToken = result.data?.accessToken;
      if (accessToken) {
        localStorage.setItem("accessToken", accessToken);
      }
      return result;
    }
  } catch (e) {
    console.error(e);
    throw e;
  }
}

export async function postSignUp(
  email: string | null,
  password: string | null
) {
  try {
    const response = await fetch(URL_SIGN_UP, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.status === 200) {
      const result = await response.json();
      const accessToken = result.data?.accessToken;
      if (accessToken) {
        localStorage.setItem("accessToken", accessToken);
      }
      return result;
    }
  } catch (e) {
    console.error(e);
    throw e;
  }
}
