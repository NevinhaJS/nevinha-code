import SYNTAXE_MAPPERS from "../Syntaxe/mappper";
import Comment from "../Syntaxe/components/Comment";
import {
  findMapperKey,
  getVComponent,
  createVElement,
  createGroupedKeyElements,
  createKeyElements,
} from "./utils";

// TODO: it needs to be refactored
export const parser = (line: string, language = "javascript") => {
  let vTokens: any = [];
  let base: any = "";
  let queue: any = [];

  if (line.startsWith("//")) return [createVElement(line, Comment)];

  Array.prototype.forEach.call(line, (value, valueIndex) => {
    // If it's the last value
    if (valueIndex === line.length - 1 && base) {
      base += value;
      const { Component, groups } = getVComponent(base, language);
      vTokens = [...vTokens, createVElement(base, Component, groups)];
      return;
    }

    if (/'|"/.test(value) && !queue.length) {
      queue.push(value);
      base = value;
      return;
    }

    if (/'|"/.test(value) && queue.length) {
      queue.shift(value);
      base += value;

      const syntaxeKey: any = findMapperKey(base, language);
      const { Component, reference } = SYNTAXE_MAPPERS[language][syntaxeKey];
      const groups: any = base.match(reference);

      vTokens = [...vTokens, createVElement(base, Component, groups)];
      base = "";

      return;
    }

    if (queue.length) {
      base += value;

      return;
    }

    const syntaxeKey: any = findMapperKey(value, language);
    const groupSyntaxeKey: any = findMapperKey(base + value, language);

    if (value === " " && !queue.length) {
      base += value;
      vTokens = [...vTokens, createVElement(base)];
      base = "";
      return;
    }

    if (groupSyntaxeKey) {
      base += value;
      vTokens = [...vTokens, ...createGroupedKeyElements(groupSyntaxeKey, base, language)];
      base = "";

      return;
    }

    if (syntaxeKey) {
      vTokens = [...vTokens, ...createKeyElements(syntaxeKey, base, value, language)];

      base = "";
      return;
    }

    base += value;

    return;
  });

  return vTokens.length ? vTokens : [createVElement("\n")];
};
