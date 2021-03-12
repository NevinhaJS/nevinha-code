import React from "react";
import styled from "@emotion/styled";

const QuoteText = styled.span`
  color: ${({ theme: { colors } }: any) => colors.text};
`;

const Quote = ({ children }: any) => <QuoteText>{children}</QuoteText>;

export default Quote;
