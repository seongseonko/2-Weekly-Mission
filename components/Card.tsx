import {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { getCardData } from "./Api/userApi";
import { FolderCard } from "./FolderCard";
import ButtonIdContext from "./context/ButtonIdContext";
import { CardDataProvider } from "./context/CardDataContext";
import { CardData } from "@/type/type";

interface Props {
  setLinkData: Dispatch<SetStateAction<{ data: CardData[] }>>;
  searchedData: CardData[];
}

function Card({ setLinkData, searchedData }: Props) {
  const [cardData, setCardData] = useState<{ data: CardData[] }>({
    data: [],
  });
  const { selectedButtonId }: { selectedButtonId: number | null } =
    useContext(ButtonIdContext);

  const dataLoad = async (id: number | null) => {
    try {
      const result = await getCardData(id);
      setCardData(result);
      const sortedItem = {
        ...result.data,
      };
      setLinkData(result);
    } catch (error: any) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    dataLoad(selectedButtonId);
  }, [selectedButtonId]);

  return (
    <div>
      <CardDataProvider value={searchedData}>
        {cardData && <FolderCard />}
      </CardDataProvider>
    </div>
  );
}
export default Card;
