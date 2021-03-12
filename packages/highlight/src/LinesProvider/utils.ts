import { SPECIAL_CHARACTERS_REGEX } from "Syntaxe/mappper";

export const isNewLine = (value: string): boolean => value === "\n";

export const isBeginningOfAnArgument = (value: string) => /\([\w\"\'\-\+\/\*]/.test(value);

// Remove isNewLine from here, and fix
//  the bug when we have a function called on a break line
// ex:
// const nevinha = () => null
//
// nevinha()
export const isBlockSeparator = (value: string): boolean => {
  if (value === " " || isNewLine(value) || /(\=|\?|\:|\{|\}|\.|\[|\]|\>|\<|\;|\)|\,)/.test(value)) {
    return true;
  }

  return false;
};
