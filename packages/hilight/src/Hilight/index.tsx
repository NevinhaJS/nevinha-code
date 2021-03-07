import React from "react";

import LinesProvider from "../LinesProvider";
import Transformer from "../Transformer";

const Hilight = ({ code }: any) => {
  return (
    <pre>
      <code>
        <LinesProvider codeBase={code}>
          <Transformer />
        </LinesProvider>
      </code>
    </pre>
  );
};

export default Hilight;
