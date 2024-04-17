const heading = React.createElement(
  "h1",
  { id: "headinf", abc: "xyz" },
  "Hello World"
);

console.log(heading); //see the output (it is a javascript object)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
