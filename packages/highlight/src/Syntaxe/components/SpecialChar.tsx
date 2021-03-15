import React from "react";
import styled from "@emotion/styled";

const SpecialCharText = styled.span`
  color: ${({ theme: { colors } }: any) => colors.light};
`;

const SpecialChar = ({ children }: any) => {
  return <SpecialCharText>{children}</SpecialCharText>;
};

export default SpecialChar;
