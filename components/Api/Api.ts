import { USER_INPUT_VALIDATION } from "@/lib/USER_INPUT_VALIDATION";
import axios from "@/lib/axios";
import { FieldValues, UseFormSetError } from "react-hook-form";
import Router from "next/router";

const BASE_URL = "https://bootcamp-api.codeit.kr";

const replaceTo = (path: string) => {
  Router.replace(path);
};

const redirectTo = (path: string) => {
  Router.push(path);
};

const { email, password } = USER_INPUT_VALIDATION;

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
  data: FieldValues,
  setError: UseFormSetError<FieldValues>
) {
  try {
    const { email, password } = data;
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
        replaceTo("/shared");
      }
      return;
    }
  } catch (e) {
    setError("email", { message: email.errorMessage.check });
    setError("password", { message: password.errorMessage.check });
  }
}

export async function postSignUp(
  data: FieldValues,
  setError: UseFormSetError<FieldValues>
) {
  const { email, password } = data;
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
        redirectTo("/signin");
      }

      return;
    }
  } catch (e: any) {
    if (e.response.status === 400) {
      setError("email", {
        message: USER_INPUT_VALIDATION.email.errorMessage.confirm,
      });
    }
  }
}
