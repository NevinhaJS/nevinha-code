import React from "react";
import { SYNTAXE_MAPPERS } from "./syntaxe-mappers";
// const teste = "var nevinha = 'oi'".match(
// 	SYNTAXE_MAPPERS.LANGUAGE_CHAR_REGEX.reference
// );

// console.log(teste);

// if (teste) {
// 	const { Component } = SYNTAXE_MAPPERS.INLINE_COMMENT_REGEX;
// 	console.log(<Component>{teste[0]}</Component>);
// }

const base = "const nevinha = 'oi'".split(" ");

const result = base.map((value: string) => {
  const syntaxeKey = Object.keys(SYNTAXE_MAPPERS).find((key) => {
    const { reference } = SYNTAXE_MAPPERS[key];

    return reference.test(value);
  });

  if (!syntaxeKey) return value;

  const { Component } = SYNTAXE_MAPPERS[syntaxeKey];

  return <Component>{value}</Component>;
});

console.log(result);
