import React, { useContext, useCallback } from "react";
import SYNTAXE_MAPPERS, { utils } from "../Syntaxe/mappper";
import { LinesContext } from "../LinesProvider";

const Transformer = () => {
  const { base }: any = useContext(LinesContext);

  const findMapperKey = useCallback((value: string) => {
    return Object.keys(SYNTAXE_MAPPERS).find((key) => utils.validateExpression(value, key));
  }, []);

  const mapToSyntaxes = useCallback(
    (
      base: string[],
      next: (Component: React.FC, groups: RegExpMatchArray, value: string, index: number) => any
    ) => {
      return base.map((value: string, index) => {
        const syntaxeKey = findMapperKey(value);

        if (!syntaxeKey) return value;

        const { Component, reference } = SYNTAXE_MAPPERS[syntaxeKey];
        const groups: any = value.match(reference);

        return next(Component, groups, value, index);
      });
    },
    []
  );

  const renderElements = (
    Component: React.FC<{ key: number; groups: RegExpMatchArray }>,
    groups: RegExpMatchArray,
    value: string,
    index: number
  ) => {
    return React.createElement(Component, { key: index, groups }, [value]);
  };

  return <>{mapToSyntaxes(base, renderElements)}</>;
};

export default Transformer;
