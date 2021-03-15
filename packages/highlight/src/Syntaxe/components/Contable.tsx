import React from "react";
import styled from "@emotion/styled";

const ContableText = styled.span`
  color: ${({ theme: { colors } }: any) => colors.passed};
`;

const Contable = ({ children }: any) => {
  return <ContableText>{children}</ContableText>;
};

export default Contable;
