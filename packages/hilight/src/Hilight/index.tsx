import React from "react";

import Transformer from "../Transformer";

const { toReact } = Transformer();

const Hilight = ({ code }: any) => {
  return (
    <pre>
      <code>{toReact(code)}</code>
    </pre>
  );
};

export default Hilight;
