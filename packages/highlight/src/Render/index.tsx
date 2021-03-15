import React, { useContext } from "react";
import { LinesContext } from "../LinesProvider";

const Render = () => {
  const lines: any = useContext(LinesContext);

  return lines.map((line: any, lineIndex: number) => (
    <div key={`line-${lineIndex}`}>
      {line.map(({ component, children, groups }: any, index: number) =>
        component
          ? React.createElement(component, { key: `${lineIndex}-${index}`, groups }, [children])
          : React.createElement(React.Fragment, { key: `${lineIndex}-${index}` }, [children])
      )}
    </div>
  ));
};

export default Render;
