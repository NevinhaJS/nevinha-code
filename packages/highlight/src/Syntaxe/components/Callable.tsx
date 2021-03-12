import React from "react";
import styled from "@emotion/styled";
import SpecialChar from "./SpecialChar";

const CallableText = styled.span`
  color: ${({ theme: { colors } }: any) => colors.reference};
`;

const Callable = ({ groups }: { groups: RegExpMatchArray }) => {
  return (
    <>
      <CallableText>{groups[1]}</CallableText>

      <SpecialChar>{groups[2]}</SpecialChar>
    </>
  );
};

export default Callable;
