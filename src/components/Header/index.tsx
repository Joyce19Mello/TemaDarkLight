import React, { useContext, useEffect, useState } from "react";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";
import { shade } from "polished";

import { Container } from "./styles";

interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);
  const [colorTheme, setColorTheme] = useState("");
  const [colorTitle, setColorTitle] = useState("");

  useEffect(() => {
    if (title === "light") {
      setColorTheme(shade(0.15, colors.primary));
      setColorTitle(colors.white);
    } else {
      setColorTheme(shade(0.15, colors.text));
      setColorTitle(colors.text);
    }
  }, [title]);

  return (
    <Container>
      <h3 style={{ color: colorTitle }}>Clique para trocar</h3>
      <Switch
        onChange={toggleTheme}
        checked={title === "dark"}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor={colorTheme}
        onColor={colorTheme}
        onHandleColor={colors.circle}
      />
    </Container>
  );
};

export default Header;
