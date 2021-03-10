import Highlight from "@nevinha-code/highlight";

const code = `import React from "react";

import Transformer from "../Transformer";

const { toReact } = Transformer();

const highlight = ({ code }: any) => {
  return (
    <pre>
      <div>ad</div>
      <code>{toReact(code)}</code>
    </pre>
  );
};

export default highlight;
`;

function App() {
  return <Highlight code={code} />;
}

export default App;
