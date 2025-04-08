import styled from "styled-components";

export const ContactsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #f6f9fc;
  margin: 0 auto;
`;

export const TeamContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  max-width: 1200px;
  background-color: #f6f9fc;
`;

export const WelcomeTextContainer = styled.p`
padding: 20px 40px 0;
  font-size: 1.4rem;
  color: #555;
  text-align: center;
  line-height: 1.9;

  @media (min-width: 1920px) {
    font-size: 2rem;
  }

  @media (max-width: 1440px) {
    font-size: 1.9rem;
  }

  @media (max-width: 1024px) {
    font-size: 1.8rem;
  }

  @media (max-width: 768px) {
    font-size: 1.7rem;
  }

  @media (max-width: 480px) {
    font-size: 1.6rem;
  }
`;

export const WelcomeTextSubtitle = styled.span`
  color: #555;
  /* text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); */
  font-weight: none;
`;

// export const WelcomeTextContainer = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   border-radius: 12px;
//   padding: 20px;
//   margin: 40px 70px 0;
//   width: 100%;
//   text-align: center;
//   transition: transform 0.3s ease, box-shadow 0.3s ease;

//   @media (max-width: 768px) {
//     padding: 20px;
//   }
// `;

// export const WelcomeTextSubtitle = styled.p`
//   color: #333;
//   font-size: clamp(1.2rem, 3vw, 1.6rem);
//   line-height: 1.5;

//   span {
//     color: #5fc9d3;
//   }

//   @media (max-width: 768px) {
//     font-size: clamp(1.2rem, 4vw, 1.4rem);
//   }
// `;

export const HighlightedSpan = styled.span`
  color: #5fc9d3;
  /* font-weight: bold; */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;

export const ContactsPageContainer = styled.div`
  width: 100%;
`;

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  margin: 20px auto;
  max-width: 1200px;
`;

export const ContactsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 30px;
  border-radius: 12px;
`;

export const ContactsBox = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  background-color: #ffffff;
  padding: 20px 50px;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  gap: 10px;
  flex: 1;
`;

export const ContactBox = styled.p`
  margin: 20px 0 0 20px;
  cursor: pointer;
`;

export const ContactsBoxTitle = styled.h2`
  margin: 10px;
  text-align: center;
  font-size: 1.8rem;
  color: #333;
  /* text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); */
`;

export const SprechzeitenWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 30px;
  border-radius: 12px;
  
`;

export const SprechzeitenBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px 50px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  flex: 1;
`;

export const DaysOfWeek = styled.div`
  padding: 0 0 0 5%;
  color: #333;
  font-size: 20px;
  line-height: 2;
`;

export const MapContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 30px;
  padding: 30px;
  border-radius: 12px;
  text-align: center;
  max-width: 1200px;
  margin: 0 auto 50px;
`;

export const ContactLink = styled.a`
  color: #333;
  text-decoration: none;
`;

export const ContactIcons = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

export const IconCircle = styled.div`
  width: 50px;
  height: 50px;
  background-color: #a0eef2;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: #ffffff;
  margin-right: 10px;
`;

export const ButtonContainer = styled.div`
  margin: 10px;
  display: flex;
  justify-content: center;
`;
