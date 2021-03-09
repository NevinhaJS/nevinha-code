import React from "react";

import LinesProvider from "../LinesProvider";
import Transformer from "../Transformer";

const Hilight = ({ code }: any) => {
  return (
    <pre>
      {/* TODO: Use styled components from the theme package */}
      <code style={{ lineHeight: "24px", display: "flex" }}>
        <LinesProvider codeBase={code.trim()}>
          <Transformer />
        </LinesProvider>
      </code>
    </pre>
  );
};

export default Hilight;
