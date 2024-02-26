export const USER_INPUT_VALIDATION = {
  email: {
    regex: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
    errorMessage: {
      empty: "이메일을 입력해 주세요",
      invalid: "잘못된 이메일 입니다.",
      check: "이메일 또는 비밀번호를 확인해 주세요.",
      confirm: "사용중인 이메일 입니다.",
    },
  },
  password: {
    regex: /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,15}$/,
    errorMessage: {
      empty: "패스워드를 입력해 주세요.",
      invalid: "잘못된 패스워드 입니다.",
      check: "이메일 또는 비밀번호를 확인해 주세요.",
    },
  },
  passwordConfirm: {
    errorMessage: {
      confirm: "입력한 비밀번호가 일치하지 않습니다.",
    },
  },
};
