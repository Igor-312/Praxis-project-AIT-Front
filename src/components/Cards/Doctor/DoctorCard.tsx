import React from "react";
import { 
  Card, 
  Photo, 
  Info, 
  FullName,
  Specialization, 
  // DetailsButton, 
  PhotoContainer } from "./styles";
// import { useTranslation } from "react-i18next";

interface DoctorCardProps {
  id: number;
  photo?: string; 
  fullName: string;
  specialization: string | string[];
  onDetailsClick: (id: number) => void;
}

const DoctorCard: React.FC<DoctorCardProps> = ({
  id,
  photo,
  fullName,
  specialization,
  onDetailsClick,
}) => {
  // const { t } = useTranslation(); 

  const handleCardClick = () => {
    onDetailsClick(id);
  };

  return (
    <Card onClick={handleCardClick}>
      <PhotoContainer>
        <Photo 
          src={photo || "https://via.placeholder.com/150"}
          alt={`Photo of ${fullName}`} 
        />
      </PhotoContainer>
      <Info>
        <FullName>{fullName}</FullName>
        <Specialization>{specialization}</Specialization>
        {/* <DetailsButton onClick={() => onDetailsClick(id)}>
          {t("message.main.team_page.moreInfoBtn")} 
        </DetailsButton> */}
      </Info>
    </Card>
  );
};

export default DoctorCard;
