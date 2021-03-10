## Nevinha Code

Nevinha Code will be set of tools to help developers to expose some code on the browser. It's a work in progress, so we have a lot of stuff to do, feel free to contribute in the following points:

- @nevinha-code/theme
  - Needs to be created in order to re-use it inside the other packages.
- @nevinha-code/highlight
  - Create the `<HilightElement color="variant-color-here">` element in order to properly show the highlight on the element
  - Show the line number before de highlighted code
  - Integrate `mdx` loader. Maybe we can take a read at [mdx API](https://mdxjs.com/advanced/api)
  - Remove `any` types and type it properly
  - Add more languages support, maybe we can re-use the languages from [react-syntax-highlighter](https://github.com/react-syntax-highlighter/react-syntax-highlighter)
  - Fix (!) Missing global variable name warning on the rollup config
