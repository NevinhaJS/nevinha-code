import React, { memo, createContext, useCallback } from "react";
import { LineItem } from "./styled";
import { parser } from "../Tokenizer";

interface LinesProviderProps {
  codeBase: string;
  children: React.ReactNode;
}

export const LinesContext = createContext([]);

// Todo: This function needs to be refactor
// I'm thinking about using a AST parser instead of tokens
const generateTokens = (code: string) => {
  const lines = code.split("\n");
  const tokens = lines.map((line) => parser(line));

  return tokens;
};

const LinesProvider = memo(({ codeBase, children }: LinesProviderProps) => {
  const convertToLines = useCallback((targetCode: string) => generateTokens(targetCode), []);
  const momoizedCode: any = React.useMemo(() => convertToLines(codeBase), [codeBase]);

  return (
    <LinesContext.Provider value={momoizedCode}>
      <div>
        {momoizedCode.map((value: any, index: number) => (
          <LineItem key={index}>{index + 1}</LineItem>
        ))}
      </div>

      <div>{children}</div>
    </LinesContext.Provider>
  );
});

export default LinesProvider;
