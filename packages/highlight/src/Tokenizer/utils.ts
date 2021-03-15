import SYNTAXE_MAPPERS, { utils as MapperUtils } from "Syntaxe/mappper";

export const findMapperKey = (value: string, language: string) => {
  return Object.keys(SYNTAXE_MAPPERS[language]).find((key) =>
    MapperUtils.validateExpression(value, key, language)
  );
};

export const getVComponent = (value: string, language: string) => {
  const syntaxeKey: any = findMapperKey(value, language);
  if (!syntaxeKey) return {};
  const { Component, reference } = SYNTAXE_MAPPERS[language][syntaxeKey];
  const groups: any = value.match(reference);

  return { Component, groups };
};

export const createVElement = (base: string, component?: any, groups?: any) => {
  return {
    children: base,
    component,
    groups,
  };
};

export const createKeyElements = (
  syntaxeKey: any,
  base: string,
  value: string,
  language: string
) => {
  const elements = [];
  const { Component, reference } = SYNTAXE_MAPPERS[language][syntaxeKey];
  const groups: any = value.match(reference);

  if (base) {
    elements.push(createVElement(base));
  }

  elements.push(createVElement(value, Component, groups));

  return elements;
};

export const createGroupedKeyElements = (groupSyntaxeKey: any, base: string, language: string) => {
  const { Component, reference } = SYNTAXE_MAPPERS[language][groupSyntaxeKey];
  const groups: any = base.match(reference);

  return [createVElement(base, Component, groups)];
};
