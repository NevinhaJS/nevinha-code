import React from "react";

const COMMON_QUOTE_REGEX = /"(.*?)"/g;
const SINGLE_QUOTE_REGEX = /'(.*?)'/g;
const SPECIAL_QUOTE_REGEX = /`(.*?)`/g;
const LANGUAGE_CHAR_REGEX = /\b(const|new|var|if|do|function|while|switch|for|foreach|in|continue|break)/g;
const SPECIAL_JS_REGEX = /\b(document|window|Array|String|Object|Number|\$)/g;
const DOM_API_REGEX = /\b(getElementsBy(TagName|ClassName|Name)|getElementById|typeof|instanceof)/g;
const SPECIAL_METH_REGEX = /\b(indexOf|match|replace|toString|length)/g;
const SPECIAL_CHARACTERS_REGEX = /(\(|\)|\=|\?|\:|\{|\}|\[|\])/g;
const COMMENT_REGEX = /(\/\*.*\*\/)/g;
const INLINE_COMMENT_REGEX = /(\/\/.*)/g;

// TODO: Replace the components definition
// for a styled component.
export const SYNTAXE_MAPPERS: any = {
  COMMON_QUOTE_REGEX: {
    reference: COMMON_QUOTE_REGEX,
    Component: ({ children }: any) => <span id="quote">{children}</span>,
  },
  SINGLE_QUOTE_REGEX: {
    reference: SINGLE_QUOTE_REGEX,
    Component: ({ children }: any) => <span id="single-quote">{children}</span>,
  },
  SPECIAL_QUOTE_REGEX: {
    reference: SPECIAL_QUOTE_REGEX,
    Component: ({ children }: any) => <span id="special-quote">{children}</span>,
  },
  LANGUAGE_CHAR_REGEX: {
    reference: LANGUAGE_CHAR_REGEX,
    Component: ({ children }: any) => <span id="language-char">{children}</span>,
  },
  SPECIAL_JS_REGEX: {
    reference: SPECIAL_JS_REGEX,
    Component: ({ children }: any) => <span id="special-js">{children}</span>,
  },
  DOM_API_REGEX: {
    reference: DOM_API_REGEX,
    Component: ({ children }: any) => <span id="dom-api">{children}</span>,
  },
  SPECIAL_METH_REGEX: {
    reference: SPECIAL_METH_REGEX,
    Component: ({ children }: any) => <span id="special-meth">{children}</span>,
  },
  COMMENT_REGEX: {
    reference: COMMENT_REGEX,
    Component: ({ children }: any) => <span id="comment">{children}</span>,
  },
  INLINE_COMMENT_REGEX: {
    reference: INLINE_COMMENT_REGEX,
    Component: ({ children }: any) => <span id="inline-comment">{children}</span>,
  },
  SPECIAL_CHARACTERS_REGEX: {
    reference: SPECIAL_CHARACTERS_REGEX,
    Component: ({ children }: any) => <span id="special-chars">{children}</span>,
  },
};
