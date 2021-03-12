import Highlight from "@nevinha-code/highlight";

const code = `import React from "react";

import Transformer from "../Transformer";

const { toReact } = Transformer();

const date = new Date("asdasd","asd");

Math.abs("asd")

export default highlight;
`;

function App() {
  return <Highlight code={code} />;
}

export default App;
