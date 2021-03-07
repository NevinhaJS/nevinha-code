import Highlight from "@nevinha-code/hilight";

const code = `import React from "react";

import Transformer from "../Transformer";

const { toReact } = Transformer();

const Hilight = ({ code }: any) => {
  return (
    <pre>
      <div>ad</div>
      <code>{toReact(code)}</code>
    </pre>
  );
};

export default Hilight;
`;

function App() {
  return <Highlight code={code} />;
}

export default App;
