import { 
  InputBox, 
  SearchIcon, 
  StyledButton 
} from "./styles";
import { useTranslation } from "react-i18next";  
import { FaSearch } from "react-icons/fa";

interface FindByTimeProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  placeholder?: string;
}

export const FindByTime: React.FC<FindByTimeProps> = ({ searchTerm, setSearchTerm }) => {
  const { t } = useTranslation();  

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value); 
  };

  return (
    <StyledButton>
      <SearchIcon>
        <FaSearch style={{ color: "white" }} />
      </SearchIcon>
      <InputBox 
        type="text" 
        placeholder={t("message.adminPanel.appointments.services.placeholderTime")} 
        value={searchTerm}
        onChange={handleInputChange}
      />
    </StyledButton>
  );
};
