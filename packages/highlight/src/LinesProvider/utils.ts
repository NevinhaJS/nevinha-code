import { SPECIAL_CHARACTERS_REGEX } from "Transformer/syntaxe-mappers";

export const isNewLine = (value: string): boolean => value === "\n";

export const isBlockSeparator = (value: string): boolean => {
  if (value === " " || SPECIAL_CHARACTERS_REGEX.test(value)) {
    return true;
  }

  return false;
};
