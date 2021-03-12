import React from "react";
import styled from "@emotion/styled";

const ReferenceText = styled.span`
  color: ${({ theme: { colors } }: any) => colors.secondary};
`;

const Reference = ({ children }: any) => <ReferenceText>{children}</ReferenceText>;

export default Reference;
