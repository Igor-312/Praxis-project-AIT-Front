import styled from "styled-components";

export const ScrollContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  scroll-behavior: smooth;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 18px;
  border-radius: 30px;
  color: #fff;
  cursor: pointer;
  text-align: center;
  transition: background-color 0.3s ease;
  background-color: #7a2141;
  border: 1px solid #ddd;
  font-weight: bold;

  &:hover {
    background-color: #641230;
  }
`;

const commonStyles = `
  border-radius: 5px;
  padding: 15px;
  box-shadow: none;
`;

export const Container = styled.div`
  ${commonStyles}
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 30px;
  border-radius: 5px;
  width: 100%;
  border: none;
  height: 80vh;
`;

export const HeaderBox = styled.div`
  padding: 0;
  margin: 0;
  /* box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1); */
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 15px;
  width: 100%;
  padding: 0 30px;
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const LeftContainer = styled.div`
  flex: 1;
  ${commonStyles}
  display: flex;
  flex-direction: column;
  gap: 20px;

  * {
    margin: 0; /* Убираем лишние отступы для вложенных элементов */
    padding: 0; /* Убираем внутренние отступы, если они мешают */
  }
`;

export const RightContainer = styled.div`
  flex: 1;
  ${commonStyles}
  display: flex;
  flex-direction: column;
  gap: 20px;

  * {
    margin: 0; /* Убираем лишние отступы для вложенных элементов */
    padding: 0; /* Убираем внутренние отступы, если они мешают */
  }
`;

export const BottomContainer = styled.div`
  ${commonStyles}
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Field = styled.input`
  padding: 10px;
  width: 100%;
  border-radius: 5px;
  border: 1px solid #cccccc;
  margin-bottom: 0; /* Убедитесь, что нет лишнего margin */
`;

export const Label = styled.label`
  display: block;
  margin: 0 0 5px 0; /* Оставляем только нужный нижний отступ */
  font-weight: bold;
`;

export const Loading = styled.div`
  text-align: center;
  font-size: 18px;
  color: #888;
`;

export const Error = styled.div`
  text-align: center;
  font-size: 18px;
  color: red;
`;

export const Heading = styled.h1`
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  margin-top: 20px;
  color: #333;
`;

export const BackButton = Button;
export const CompleteButton = Button;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

  textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 0; /* Убедитесь, что нет лишнего margin */
  }
`;

export const PhoneBox = styled.div`
  display: flex;
  gap: 20px; /* Управление расстоянием между элементами внутри блока */
  align-items: center;
  margin: 0; /* Убираем лишние внешние отступы */
`;
