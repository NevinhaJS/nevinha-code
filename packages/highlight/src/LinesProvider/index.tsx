import React, { memo, createContext, useRef, useEffect, useCallback, useState } from "react";
import { LineItem } from "./styled";
import { isBeginningOfAnArgument, isBlockSeparator, isNewLine } from "./utils";

interface LinesProviderProps {
  codeBase: string;
  children: React.ReactNode;
}

export const LinesContext = createContext([]);

// const parseValue = ({ lines, base }: any, value: string) => {
//   if (!base.length || isNewLine(value)) {
//     return {
//       base: [...base, value],
//       lines: [...lines, value],
//     };
//   }

//   lines[lines.length - 1] += value;

//   if (
//     isBlockSeparator(value) ||
//     isBeginningOfAnArgument(base[base.length - 1] + value) ||
//     isBlockSeparator(base[base.length - 1]) ||
//     lines[lines.length - 1] === " "
//   ) {
//     return {
//       lines,
//       base: [...base, value],
//     };
//   }

//   base[base.length - 1] += value;

//   return { lines, base };
// };

const addVirtualElement = (base: string) => {
  return {
    children: base,
    component: null,
  };
};

const generateTree = (code: string) => {
  const lines = code.split("\n");

  const tree = lines.map((line) => {
    let vTree: any = [];
    let base: any = "";
    let queue: any = [];

    Array.prototype.forEach.call(line, (value) => {
      if (/'|"/.test(value) && !queue.length) {
        queue.push(value);
        base = value;
        return;
      } else if (/'|"/.test(value) && queue.length) {
        queue.shift(value);
        base += value;

        vTree = [...vTree, addVirtualElement(base)];
        base = "";

        return;
      } else if (isBlockSeparator(value) && !queue.length) {
        vTree = [...vTree, addVirtualElement(base), addVirtualElement(value)];
        base = "";

        return;
      }

      base += value;
    });

    return vTree;
  });

  return tree;
};

const LinesProvider = memo(({ codeBase, children }: LinesProviderProps) => {
  const convertToLines = useCallback((targetCode: string) => {
    return generateTree(targetCode);
    // return Array.prototype.reduce.call(targetCode, parseValue, { base: [], lines: [] });
  }, []);
  const momoizedCode: any = React.useMemo(() => convertToLines(codeBase), [codeBase]);

  return (
    <LinesContext.Provider value={momoizedCode}>
      <div>
        {momoizedCode.map((value: any, index: number) => (
          <LineItem key={index}>{index + 1}</LineItem>
        ))}
      </div>

      {/* <div>{children}</div> */}
    </LinesContext.Provider>
  );
});

export default LinesProvider;
