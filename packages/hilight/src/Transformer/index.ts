import React from "react";
import SYNTAXE_MAPPERS, { utils } from "./syntaxe-mappers";

//TODO: remove `any` types
const Transformer = () => {
  const findMapperKey = (value: string) => {
    return Object.keys(SYNTAXE_MAPPERS).find((key) => utils.validateExpression(value, key));
  };

  const convertToLines = (code: string) => {
    return Array.prototype.reduce.call(
      code,
      (acc: any, value: any) => {
        if (!acc.length) return [value];

        if (value === " " || acc[acc.length - 1] === " ") {
          return [...acc, value];
        }

        acc[acc.length - 1] += value;

        return acc;
      },
      []
    );
  };

  const mapToSyntaxes = (
    line: string[],
    next: (Component: React.FC, value: string, index: number) => any
  ) => {
    return line.map((value: string, index) => {
      const syntaxeKey = findMapperKey(value);

      if (!syntaxeKey) return value;

      const { Component } = SYNTAXE_MAPPERS[syntaxeKey];

      return next(Component, value, index);
    });
  };

  const toReact = (code: string) => {
    const lines: any = convertToLines(code);

    const result = mapToSyntaxes(lines, (Component: React.FC, value, index) => {
      return React.createElement(Component, { key: index }, [value]);
    });

    return result;
  };

  return {
    toReact,
  };
};

export default Transformer;
