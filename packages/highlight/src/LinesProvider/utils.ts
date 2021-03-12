import { SPECIAL_CHARACTERS_REGEX } from "Syntaxe/mappper";

export const isNewLine = (value: string): boolean => value === "\n";

export const isBeginningOfAnArgument = (value: string) => /\([\w\"\']/.test(value);

export const isBlockSeparator = (value: string): boolean => {
  if (value === " " || /(\=|\?|\:|\{|\}|\.|\[|\]|\>|\<|\;|\)|\,)/.test(value)) {
    return true;
  }

  return false;
};
