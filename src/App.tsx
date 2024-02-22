import { useState } from "react";
import {
  Body,
  TitleBody,
  Title,
  Subtitle,
  Card,
  CardHeader,
  Tag,
  CardNumber,
  Dot,
  CheckboxContainer,
  CheckboxLabel,
  HiddenCheckbox,
  StyledCheckbox,
  CardDataContainer,
  DataHeader,
  DataValue,
  DataBlock,
  CardFooter,
  Zip,
} from "./styles";
import Logo from "./assets/Logo.svg";
import Visa from "./assets/Visa.svg";

const App = () => {
  const cardNumber = "1232222344321732";

  const numberString = cardNumber.toString();
  const setOfNumbers = [];

  for (let i = 0; i < numberString.length; i += 4) {
    setOfNumbers.push(numberString.slice(i, i + 4));
  }

  const [isChecked, setIsChecked] = useState(false);

  const hiddenDots = "••••";
  const hiddenCVC = "•••";
  const visibleDigits = cardNumber.slice(-4);

  const Checkbox = ({
    checked,
    ...props
  }: {
    checked: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  }) => (
    <CheckboxContainer>
      <HiddenCheckbox checked={checked} {...props} />
      <StyledCheckbox $isChecked={checked} />
    </CheckboxContainer>
  );

  const handleCheckboxChange = (event: any) => {
    setIsChecked(event.target.checked);
  };

  return (
    <Body>
      <TitleBody>
        <Title>Flex card</Title>
        <Subtitle>Used for pre-tax purchases</Subtitle>
      </TitleBody>
      <Card>
        <CardHeader>
          <img src={Logo} alt="Benepass logo" />
          <Tag>Virtual</Tag>
        </CardHeader>
        <CardNumber>
          {isChecked ? (
            setOfNumbers.map((set, index) => (
              <Dot key={index} hidden={false}>
                {set}
              </Dot>
            ))
          ) : (
            <>
              <Dot>{hiddenDots}</Dot>
              <Dot hidden={false}>{visibleDigits}</Dot>
            </>
          )}
        </CardNumber>
        <CardDataContainer>
          <DataBlock>
            <DataHeader>VALID THRU</DataHeader>
            <DataValue>8/28</DataValue>
          </DataBlock>
          <DataBlock>
            <DataHeader>CVC</DataHeader>
            <DataValue>{isChecked ? "345" : hiddenCVC}</DataValue>
          </DataBlock>
        </CardDataContainer>
        <CardFooter>
          <Zip>ZIP 66062</Zip>
          <img src={Visa} alt="Visa logo" />
        </CardFooter>
      </Card>
      <CheckboxContainer>
        <Checkbox checked={isChecked} onChange={handleCheckboxChange} />
        <CheckboxLabel $isChecked={isChecked}>Show details</CheckboxLabel>
      </CheckboxContainer>
    </Body>
  );
};

export default App;
