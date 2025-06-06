import styled from "styled-components";

export const Card = styled.div`
  margin-top: 50px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.04);
  overflow: hidden;
  transition: all 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
    transform: translateY(-5px);
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.18);
  }

`;

export const PhotoContainer = styled.div`
  position: relative;

  width: 100%;
  /* height: 250px; */
  padding-top: 75%;
  overflow: hidden;

  background-color: #bbb9f2;
  background-color: #e0def696; 

`;

export const Photo = styled.img`
position: absolute;
  top: 0;
  left: 0;
   width: 100%;
   height: 100%;
  object-fit: cover;
  display: block;

`;

export const Info = styled.div`
  padding: 20px;
  text-align: center;
`;

export const Title = styled.h3`
  font-size: 22px;
  color: #2e3a59; 
  font-weight: bold;
`;

export const Description = styled.p`
  font-size: 16px;
  color: #6a6a6a; 
  margin-bottom: 16px;
  line-height: 1.5; 
`;

export const DetailsButton = styled.button`
  background-color: #a0eef2; 
  background-color: #9ceef1; 
  background-color: #7a2141;
  color: white;
  padding: 10px 20px;
  border-radius: 6px;
  font-weight: 600; 
  border: none;
  cursor: pointer;
  font-size: 18px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.04);
  transition: background-color 0.3s;

  &:hover {
    background-color: #89d4e3;   
    background-color: #3b7f83;
    background-color: #641230;
  }
`;
