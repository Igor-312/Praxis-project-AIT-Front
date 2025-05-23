import React, { useContext } from 'react';
import { StyledButton } from './styles';
import { ModalContext } from '../../Modal/ModalContext';

interface MakeAppointmentBtnProps {
  text: string; 
  onClick?: () => void;
  disabled?: boolean;
  serviceId?: number | null;
  backgroundColor?: string;
  color?: string; 
  width?: string;
  height?: string;
  padding?: string;
  fontSize?: string;
}

const MakeAppointmentBtn: React.FC<MakeAppointmentBtnProps> = ({ 
  text, 
  onClick,
  disabled, 
  serviceId,
  backgroundColor,
  color,
  width,
  height,
  padding,
  fontSize
}) => {
  const { openModal } = useContext(ModalContext);

  const handleClick = () => {
    console.log('Clicked serviceId:', serviceId); 

    if (onClick) {
      onClick();
    } else {
      openModal(undefined, serviceId!); 
    }
  };

  return (
    <StyledButton 
        onClick={handleClick} 
        disabled={disabled} 
        backgroundColor={backgroundColor} 
        color={color}
        width={width}
        height={height}
        padding={padding}
        fontSize={fontSize}
        >
      {text}
    </StyledButton>
  );
};

export default MakeAppointmentBtn;
