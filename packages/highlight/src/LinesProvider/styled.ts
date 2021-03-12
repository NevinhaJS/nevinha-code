import styled from "@emotion/styled";

export const LineItem = styled.span`
  display: block;
  padding-right: 1rem;
  text-align: right;
  color: ${({ theme: { colors, styles } }: any) => colors[styles.lines.color]};
`;
