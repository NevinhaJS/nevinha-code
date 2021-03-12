import Highlight from "@nevinha-code/highlight";

const code = `import nevinha from 'nevinha'

const myFunction = () => {
  return "Hey!"
}

console.log("Hello")

Math.abs(-123)

const date = new Date("2021-03-03")

export default myFunction;
`;

const App = () => {
  return <Highlight code={code} />;
};

export default App;
