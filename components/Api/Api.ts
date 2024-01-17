import axios from "@/lib/axios";
const BASE_URL = "https://bootcamp-api.codeit.kr";

export async function postEmailCheck(email: string) {
  try {
    const response = await axios.post(
      `/check-email`,
      { email },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const result = response.data;
    return result;
  } catch (error: any) {
    throw error.response.data.error.message;
  }
}
export async function postSignIn(
  email: string | null,
  password: string | null
) {
  try {
    const response = await axios.post(
      `/sign-in`,
      { email, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.status === 200) {
      const result = response.data;
      const accessToken = result.data?.accessToken;
      if (accessToken) {
        localStorage.setItem("accessToken", accessToken);
      }
      return result;
    }
  } catch (e) {
    throw e;
  }
}

export async function postSignUp(
  email: string | null,
  password: string | null
) {
  try {
    const response = await axios.post(
      `/sign-up`,
      { email, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.status === 200) {
      const result = response.data;
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
