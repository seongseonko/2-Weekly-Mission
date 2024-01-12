import { Dispatch, ReactNode, createContext } from "react";

interface Value {
  selectedButtonId: number | null;
  setSelectedButtonId: Dispatch<React.SetStateAction<number | null>>;
  selectedButtonTitle: string;
  setSelectedButtonTitle: Dispatch<React.SetStateAction<string>>;
}

const ButtonIdContext = createContext<Value>({
  selectedButtonId: null,
  setSelectedButtonId: () => {},
  selectedButtonTitle: "",
  setSelectedButtonTitle: () => {},
});

interface ButtonIdContextProviderProps {
  children: ReactNode;
  value: Value;
}

export const ButtonIdContextProvider = ({
  children,
  value,
}: ButtonIdContextProviderProps): JSX.Element => {
  return (
    <ButtonIdContext.Provider value={value}>
      {children}
    </ButtonIdContext.Provider>
  );
};

export default ButtonIdContext;
