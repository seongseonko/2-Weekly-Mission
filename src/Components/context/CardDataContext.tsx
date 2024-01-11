import { ReactNode, createContext } from "react";

interface Link {
  count: number;
}

interface WebLink {
  id: number;
  created_at: string;
  updated_at: string | null;
  url: string;
  title: string | null;
  description: string | null;
  image_source: string | null;
  folder_id: number | null;
}

interface WebLinkData {
  data: WebLink[];
}

interface CardDataProviderProps {
  children: ReactNode;
  value: WebLinkData;
}

export const CardDataContext = createContext<WebLinkData | null>(null);

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
