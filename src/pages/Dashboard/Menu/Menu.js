import { useState } from "react";
import Practice from "../../../components/Dashboard/Menu/Practice/Practice";
import { ButtonContainer, ButtonStyle, MenuStyle } from "./MenuStyle";

export default function Menu() {
  const [practiceOption, setPracticeOption] = useState(false);
  return (
    <MenuStyle>
      <h1>Menu</h1>
      {practiceOption ? (
        <Practice setPracticeOption={setPracticeOption} />
      ) : (
        <ButtonContainer>
          <ButtonStyle onClick={() => setPracticeOption(!practiceOption)}>
            Practice
          </ButtonStyle>
          <ButtonStyle>Stats</ButtonStyle>
          <ButtonStyle>Calendar</ButtonStyle>
          <ButtonStyle>Search word</ButtonStyle>
        </ButtonContainer>
      )}
    </MenuStyle>
  );
}

