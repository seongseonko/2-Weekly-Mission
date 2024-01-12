import { ReactNode, createContext } from "react";
import { CardData } from "../../Pages/Shared/type";

interface Link {
  count: number;
}

interface CardDataProviderProps {
  children: ReactNode;
  value: CardData[];
}

export const CardDataContext = createContext<CardData[] | null>(null);

export const CardDataProvider = ({
  children,
  value,
}: CardDataProviderProps) => {
  return (
    <CardDataContext.Provider value={value}>
      {children}
    </CardDataContext.Provider>
  );
};
