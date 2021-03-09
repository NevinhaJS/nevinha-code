import React, { memo, createContext, useCallback } from "react";
import { isBlockSeparator, isNewLine } from "./utils";

interface LinesProviderProps {
  codeBase: string;
  children: React.ReactNode;
}

export const LinesContext = createContext([]);

const parseValue = ({ lines, base }: any, value: string) => {
  if (!base.length || isNewLine(value)) {
    return {
      base: [...base, value],
      lines: [...lines, value],
    };
  }

  lines[lines.length - 1] += value;

  if (
    isBlockSeparator(value) ||
    isBlockSeparator(base[base.length - 1]) ||
    lines[lines.length - 1] === " "
  ) {
    return {
      lines,
      base: [...base, value],
    };
  }

  base[base.length - 1] += value;

  return { lines, base };
};

const LinesProvider = memo(({ codeBase, children }: LinesProviderProps) => {
  const convertToLines = useCallback(
    (targetCode: string) =>
      Array.prototype.reduce.call(targetCode, parseValue, { base: [], lines: [] }),
    []
  );

  const code: any = React.useMemo(() => convertToLines(codeBase), [codeBase]);

  return <LinesContext.Provider value={code}>{children}</LinesContext.Provider>;
});

export default LinesProvider;
