// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import DoctorCard from "../../components/Cards/Doctor/DoctorCard";
// import {
//   TeamContainer,
//   WelcomeSection,
//   TeamHeaderText,
//   HighlightText,
//   TeamPhoto,
//   HeaderTextBox,
//   TeamText,
//   DoctorsGrid,
// } from "./styles";
// import { useTranslation } from "react-i18next";

// interface Doctor {
//   id: number;
//   full_name: string;
//   topimage: string;
//   images?: { id: number; path: string }[];
//   specialisation_de: string;
//   specialisation_en: string;
//   specialisation_ru: string;
// }

// const Team: React.FC = () => {
//   const [doctors, setDoctors] = useState<Doctor[]>([]);
//   const navigate = useNavigate();
//   const { t, i18n } = useTranslation();

//   useEffect(() => {
//     const fetchDoctors = async () => {
//       try {
//         const response = await fetch("http://localhost:5000/doctors");
//         const data = await response.json();
//         setDoctors(Array.isArray(data) ? data : data.doctors || []);
//       } catch (error) {
//         console.error("Error fetching doctors:", error);
//       }
//     };

//     fetchDoctors();
//   }, []);

//   const handleDetailsClick = (id: number) => {
//     navigate(`/doctor/${id}`);
//   };

//   return (
//     <TeamContainer>
//       <WelcomeSection>
//         <TeamHeaderText>
//         {t('message.main.team_page.welcome')} <HighlightText>Abramian Dental</HighlightText>
//         </TeamHeaderText>
//       </WelcomeSection>

//       <TeamPhoto
//         src="https://www.zahnaerzte-siermann.de/wp-content/uploads/2022/12/Fotowand_Team.jpg"
//         alt="Team"
//       />

//       <HeaderTextBox>
//         <TeamText>
//           Unser <HighlightText>Ärzteteam</HighlightText> |
//         </TeamText>
//       </HeaderTextBox>

//       <DoctorsGrid>
//         {doctors.length > 0 ? (
//           doctors.map((doctor) => {
//             const specializationKey = `specialisation_${i18n.language}` as keyof Doctor;
//             return (
//               <DoctorCard
//                 key={doctor.id}
//                 id={doctor.id}
//                 photo={doctor.topimage.replace(/\\/g, "/")}
//                 fullName={doctor.full_name}
//                 specialization={doctor[specializationKey] as string || t("noSpecialization")}
//                 onDetailsClick={() => handleDetailsClick(doctor.id)}
//               />
//             );
//           })
//         ) : (
//           <p>{t("noDoctorsAvailable")}</p>
//         )}
//       </DoctorsGrid>
//     </TeamContainer>
//   );
// };
// export default Team;




import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DoctorCard from "../../components/Cards/Doctor/DoctorCard";
import {
  TeamContainer,
  WelcomeSection,
  TeamHeaderText,
  HighlightText,
  TeamPhoto,
  HeaderTextBox,
  TeamText,
  DoctorsGrid,
} from "./styles";
import { useTranslation } from "react-i18next";

interface Doctor {
  id: number;
  full_name: string;
  topimage: string;
  images?: { id: number; path: string }[];
  specialisation_de: string;
  specialisation_en: string;
  specialisation_ru: string;
}

const Team: React.FC = () => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await fetch("http://localhost:5000/doctors");
        const data = await response.json();
        setDoctors(Array.isArray(data) ? data : data.doctors || []);
      } catch (err) {
        console.error("Error fetching doctors:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, [i18n.language]);

  const handleDetailsClick = (id: number) => {
    navigate(`/doctor/${id}`);
  };

  return (
    <TeamContainer>
      <WelcomeSection>
        <TeamHeaderText>
          {t("message.main.team_page.welcome")}{" "}
          <HighlightText>Abramian Dental</HighlightText>
        </TeamHeaderText>
      </WelcomeSection>

      <TeamPhoto
        src="https://www.zahnaerzte-siermann.de/wp-content/uploads/2022/12/Fotowand_Team.jpg"
        alt="Team"
      />

      <HeaderTextBox>
        <TeamText>
          Unser <HighlightText>Ärzteteam</HighlightText> |
        </TeamText>
      </HeaderTextBox>

      <DoctorsGrid>
        {loading ? (
          <p>{t("loadingDoctors")}</p>
        ) : error ? (
          <p>{t("errorFetchingDoctors")}</p>
        ) : doctors.length > 0 ? (
          doctors.map((doctor) => {
            const specializationKey = `specialisation_${i18n.language}` as keyof Doctor;
            return (
              <DoctorCard
                key={doctor.id}
                id={doctor.id}
                photo={
                  doctor.topimage
                    ? doctor.topimage.replace(/\\/g, "/")
                    : "https://via.placeholder.com/150"
                }
                fullName={doctor.full_name}
                specialization={doctor[specializationKey] as string || t("noSpecialization")}
                onDetailsClick={() => handleDetailsClick(doctor.id)}
              />
            );
          })
        ) : (
          <p>{t("noDoctorsAvailable")}</p>
        )}
      </DoctorsGrid>
    </TeamContainer>
  );
};

export default Team;
