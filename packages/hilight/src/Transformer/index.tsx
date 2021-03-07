import React, { useContext, useCallback } from "react";
import SYNTAXE_MAPPERS, { utils } from "./syntaxe-mappers";
import { LinesContext } from "../LinesProvider";

// //TODO: remove `any` types
const Transformer = () => {
  const linesContext: string[] = useContext(LinesContext);

  const findMapperKey = useCallback((value: string) => {
    return Object.keys(SYNTAXE_MAPPERS).find((key) => utils.validateExpression(value, key));
  }, []);

  const mapToSyntaxes = useCallback(
    (line: string[], next: (Component: React.FC, value: string, index: number) => any) => {
      return line.map((value: string, index) => {
        const syntaxeKey = findMapperKey(value);

        if (!syntaxeKey) return value;

        const { Component } = SYNTAXE_MAPPERS[syntaxeKey];

        return next(Component, value, index);
      });
    },
    []
  );

  const renderElements = (Component: React.FC, value: string, index: number) => {
    return React.createElement(Component, { key: index }, [value]);
  };

  return <>{mapToSyntaxes(linesContext, renderElements)}</>;
};

export default Transformer;
