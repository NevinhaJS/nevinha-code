import React from "react";
import { ThemeProvider } from "@emotion/react";

import { dark } from "@nevinha-code/theme";
import LinesProvider from "../LinesProvider";
import Render from "../Render";
import { HighlightWrapper, HighlightContainer } from "./styled";

const Highlight = ({ code, theme = dark }: any) => {
  return (
    <ThemeProvider theme={theme}>
      <HighlightWrapper>
        <HighlightContainer>
          <LinesProvider codeBase={code}>
            <Render />
          </LinesProvider>
        </HighlightContainer>
      </HighlightWrapper>
    </ThemeProvider>
  );
};

export default Highlight;
