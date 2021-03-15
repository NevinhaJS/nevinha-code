import javascript from "./javascript";

export const utils = {
  validateExpression: (value: string, key: string, language: string) => {
    const { reference } = SYNTAXE_MAPPERS[language][key];

    return reference.test(value);
  },
};

// TODO: Replace the components definition
// for a styled component.
const SYNTAXE_MAPPERS: any = {
  javascript,
};

export default SYNTAXE_MAPPERS;
