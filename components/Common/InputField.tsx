import { USER_INPUT_VALIDATION } from "@/lib/USER_INPUT_VALIDATION";
import { useFormContext } from "react-hook-form";
import styled from "styled-components";
import Image from "next/image";
import openEye from "@/public/eye-on.svg";
import closeEye from "@/public/eye_off.svg";
import useToggle from "@/hook/useToggle";
import { ReactNode } from "react";

type InputFieldProps = {
  name: string;
  type: string;
  label: string;
  placeholder?: string;
  defaultValue?: string;
  maxLength?: number;
};

type InputProps = {
  $isError: boolean;
};
interface PasswordShow {
  src: string;
  show: string;
  alt: string;
}

const Label = styled.label`
  position: relative;
  font-size: 1.4rem;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const Input = styled.input<InputProps>`
  position: relative;
  width: 100%;
  height: 6rem;
  padding: 1.8rem 1.5rem;
  outline: none;
  border-radius: 1rem;
  border: 1px solid
    ${({ $isError }) => ($isError ? "var(--red)" : "var(--gray20)")};

  &:focus {
    border: 1px solid var(--primary-color);
  }
`;

const ErrorMessage = styled.p`
  margin-top: 0.6rem;
  font-size: 1.4rem;
  font-weight: 400;
  color: var(--red);
`;

const PasswordOpenButton = styled.button`
  padding: 0.8rem;
  height: 3.2rem;
  position: absolute;
  top: 50%;
  right: 1rem;
  background-color: var(--white);
`;

const PASSWORD_SHOW: {
  open: PasswordShow;
  close: PasswordShow;
} = {
  open: {
    src: openEye,
    show: "text",
    alt: "Open - Eye",
  },
  close: {
    src: closeEye,
    show: "password",
    alt: "Close - Eye",
  },
};

const InputField = ({ name, type, label, ...props }: InputFieldProps) => {
  const {
    register,
    formState: { errors },
    getValues,
  } = useFormContext();
  const { regex, errorMessage } = USER_INPUT_VALIDATION[name] || {};
  const isError = !!errors[name];
  const { toggle, handleToggleClick } = useToggle();

  const { src, show, alt } = toggle ? PASSWORD_SHOW.open : PASSWORD_SHOW.close;

  return (
    <div>
      <Label>
        {label}
        <Input
          {...register(name, {
            required: errorMessage?.empty,
            pattern: {
              value: regex,
              message: errorMessage?.invalid || "",
            },
            minLength:
              name === "password"
                ? {
                    value: 8,
                    message: "비밀번호는 8자 이상 영문 + 숫자로 입력해 주세요",
                  }
                : undefined,
            validate:
              name === "passwordConfirm"
                ? {
                    notMatch: (value) => {
                      const { password } = getValues();
                      return password === value || errorMessage.confirm;
                    },
                  }
                : undefined,
          })}
          $isError={isError}
          {...props}
          type={type === "password" ? show : type}
        />
        {type === "password" && (
          <PasswordOpenButton type="button" onClick={handleToggleClick}>
            <Image src={src} alt={alt} width={16} height={16} sizes="100%" />
          </PasswordOpenButton>
        )}
      </Label>
      {errors && (
        <ErrorMessage>{errors[name]?.message as ReactNode}</ErrorMessage>
      )}
    </div>
  );
};

export default InputField;
