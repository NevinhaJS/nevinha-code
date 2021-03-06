import React from "react";
import SYNTAXE_MAPPERS, { utils } from "syntaxe-mappers";

//TODO: remove `any` types
const Transformer = () => {
  const findMapperKey = (value: string) => {
    return Object.keys(SYNTAXE_MAPPERS).find((key) => utils.validateExpression(value, key));
  };

  const mapToSyntaxes = (
    base: string[],
    next: (Component: React.FC, value: string, index: number) => any
  ) => {
    return base.map((value: string, index) => {
      const syntaxeKey = findMapperKey(value);

      if (!syntaxeKey) return value;

      const { Component } = SYNTAXE_MAPPERS[syntaxeKey];

      return next(Component, value, index);
    });
  };

  const toReact = (base: string) => {
    const baseArray = base.split(" ");
    const result = mapToSyntaxes(baseArray, (Component: React.FC, value, index) => {
      return React.createElement(Component, { key: index }, [value]);
    });

    return result;
  };

  return {
    toReact,
  };
};

export default Transformer;
