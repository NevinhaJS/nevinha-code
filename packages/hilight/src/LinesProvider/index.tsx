import React, { memo, createContext, useState, useEffect, useCallback } from "react";

interface LinesProviderProps {
  codeBase: string;
  children: React.ReactNode;
}

export const LinesContext = createContext([]);

const LinesProvider = memo(({ codeBase, children }: LinesProviderProps) => {
  const convertToLines = useCallback((targetCode) => {
    return Array.prototype.reduce.call(
      targetCode,
      (acc: any, value: string) => {
        if (!acc.length) return [value];

        if (value === " " || acc[acc.length - 1] === " ") {
          return [...acc, value];
        }

        acc[acc.length - 1] += value;

        return acc;
      },
      []
    );
  }, []);

  const [code, setCode]: any = useState(() => convertToLines(codeBase));

  useEffect(() => {
    const newCode = convertToLines(codeBase);
    setCode(newCode);
  }, [codeBase, setCode]);

  return <LinesContext.Provider value={code}>{children}</LinesContext.Provider>;
});

export default LinesProvider;
