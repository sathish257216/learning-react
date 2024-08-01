const root = ReactDOM.createRoot(document.getElementById("root"));
const heading = React.createElement("h2", {id: "heading-text"}, "React Hello World!!");
console.log('heading', heading);
root.render(heading);
