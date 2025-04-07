import { 
  ImageItem, 
  InputBox, 
  StyledButton 
} from "./styles";
import { useTranslation } from "react-i18next";  

interface FindServiceContainerProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export const FindServiceContainer: React.FC<FindServiceContainerProps> = ({ searchTerm, setSearchTerm }) => {
  const { t } = useTranslation();  

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value); 
  };

  return (
    <StyledButton>
      <ImageItem
        src="https://static.vecteezy.com/system/resources/previews/011/947/136/original/silver-search-icon-free-png.png"
        alt="Search"
      />
      <InputBox 
        type="text" 
        placeholder={t("message.adminPanel.appointments.services.placeholder")}  // Перевод placeholder
        value={searchTerm}
        onChange={handleInputChange}
      />
    </StyledButton>
  );
};
