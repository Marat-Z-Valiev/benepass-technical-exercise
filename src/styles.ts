import styled from "styled-components";
import backgroundImage from "./assets/Type3.png";

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  padding: 2rem;
`;

export const TitleBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: black;
`;

export const Title = styled.div`
  font-size: 26px;
  font-weight: 500;
`;

export const Subtitle = styled.div`
  font-size: 20px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  border-radius: 30px;
  background-image: url(${backgroundImage});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  margin-top: 2rem;
  padding: 1.5rem;
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 392px;
`;

export const Tag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 34px;
  width: 74px;
  color: black;
  background-color: white;
  border-radius: 1rem;
`;

export const CardNumber = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  font-size: 1.8rem;
`;

export const HiddenNumber = styled.span`
  color: white;
`;

export const Dot = styled.span`
  visibility: ${(props) => (props.hidden ? "hidden" : "visible")};
`;

export const CheckboxLabel = styled.p<{ $isChecked?: boolean }>`
  color: ${(props) => (props.$isChecked ? "red" : "black")};
`;

export const CheckboxContainer = styled.label`
  display: flex;
  align-items: center;
  gap: 1rem;
  position: relative;
  cursor: pointer;
`;

export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`;

export const StyledCheckbox = styled.div<{ $isChecked?: boolean }>`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: ${(props) => (props.$isChecked ? "red" : "transparent")};
  border-radius: 4px;
  border: 1px solid ${(props) => (props.$isChecked ? "red" : "black")};

  &::after {
    content: "${(props) => (props.$isChecked ? "✔" : "")}";
    color: white;
    font-size: 12px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: ${(props) => (props.$isChecked ? "1" : "0")};
  }
`;

export const CardDataContainer = styled.div`
  display: flex;
  gap: 3rem;
  margin-top: 2.5rem;
`;

export const DataBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

export const DataHeader = styled.div`
  font-size: 12px;
  color: #d3d2de;
`;

export const DataValue = styled.div`
  font-size: 18px;
  font-weight: 500;
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3.5rem;
`;

export const Zip = styled.div`
  font-size: 18px;
`;
