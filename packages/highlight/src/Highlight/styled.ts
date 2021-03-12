import styled from "@emotion/styled";

export const HighlightWrapper = styled.pre`
  background: ${({ theme: { styles, colors } }: any) => colors[styles.pre.bg]};
  padding: 1rem;
`;

export const HighlightContainer = styled.code`
  line-height: 24px;
  color: ${({ theme: { styles, colors } }: any) => colors[styles.code.color]};
  display: flex;
`;
