import React from "react";
import { ThemeProvider } from "@emotion/react";

import { dark } from "@nevinha-code/theme";
import LinesProvider from "../LinesProvider";
import Transformer from "../Transformer";
import { HighlightWrapper, HighlightContainer } from "./styled";

const Highlight = ({ code, theme = dark }: any) => {
  return (
    <ThemeProvider theme={theme}>
      <HighlightWrapper>
        <HighlightContainer>
          <LinesProvider codeBase={code.trim()}>
            <Transformer />
          </LinesProvider>
        </HighlightContainer>
      </HighlightWrapper>
    </ThemeProvider>
  );
};

export default Highlight;
