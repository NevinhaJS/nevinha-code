import { useState } from "react";
import Highlight from "@nevinha-code/highlight";

const App = () => {
  const [value, setValue] = useState(``);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      Here your code:
      <br />
      <div>
        <textarea
          style={{ width: "100%", height: 200, padding: 10 }}
          onChange={handleChange}
        ></textarea>
        <Highlight code={value} />
      </div>
    </>
  );
};

export default App;
