import React from "react";
import Callable from "../components/Callable";
import LanguageChar from "../components/LanguageChar";
import Quote from "../components/Quote";
import References from "../components/References";
import SpecialChar from "../components/SpecialChar";

const COMMON_QUOTE_REGEX = /"(.*?)"/;
const SINGLE_QUOTE_REGEX = /'(.*?)'/;

const SPECIAL_QUOTE_REGEX = /`(.*?)`/;
const LANGUAGE_CHAR_REGEX = /(\b(const|default|new|var|if|do|function|while|switch|for|foreach|in|continue|break))|\=|\>/g;
const SPECIAL_JS_REGEX = /\b(document|window|Array|String|Object|Number|\$)/;
const DOM_API_REGEX = /\b(getElementsBy(TagName|ClassName|Name)|getElementById|typeof|instanceof)/;
const SPECIAL_METH_REGEX = /\b(indexOf|match|replace|toString|length)/;
const COMMENT_REGEX = /(\/\*.*\*\/)/;
const INLINE_COMMENT_REGEX = /(\/\/.*)/;
const REFERENCES_REGEX = /\b(import|export|from|return)/;
const CALLABLE_REGEX = /([A-Za-z]+)(\()/;
const SPECIAL_CHARACTERS_REGEX = /^(\(|\)|\.|\,|\?|\:|\{|\}|\[|\]|\;)$/;

// TODO: Replace the components definition
// for a styled component.
export default {
  CALLABLE: {
    reference: CALLABLE_REGEX,
    Component: Callable,
  },
  COMMON_QUOTE_REGEX: {
    reference: COMMON_QUOTE_REGEX,
    Component: Quote,
  },
  SINGLE_QUOTE_REGEX: {
    reference: SINGLE_QUOTE_REGEX,
    Component: Quote,
  },
  SPECIAL_QUOTE_REGEX: {
    reference: SPECIAL_QUOTE_REGEX,
    Component: ({ children }: any) => <span id="special-quote">{children}</span>,
  },
  LANGUAGE_CHAR_REGEX: {
    reference: LANGUAGE_CHAR_REGEX,
    Component: LanguageChar,
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
    Component: SpecialChar,
  },
  REFERENCES_REGEX: {
    reference: REFERENCES_REGEX,
    Component: References,
  },
};
