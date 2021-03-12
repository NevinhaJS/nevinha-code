import React from "react";
import styled from "@emotion/styled";

const LanguageCharText = styled.span`
  color: ${({ theme: { colors } }: any) => colors.success};
`;

const LanguageChar = ({ children }: any) => <LanguageCharText>{children}</LanguageCharText>;

export default LanguageChar;
