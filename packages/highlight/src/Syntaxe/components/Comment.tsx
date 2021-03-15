import React from "react";
import styled from "@emotion/styled";

const CommentText = styled.span`
  color: ${({ theme: { colors } }: any) => colors.dark300};
`;

const Comment = ({ children }: any) => {
  return <CommentText>{children}</CommentText>;
};

export default Comment;
