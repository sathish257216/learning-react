/*
*<div id="parent">
*   <div id="child">
*       <h1>H1 Tag</h1>
*   </div>
*</div>
*
*/

const root = ReactDOM.createRoot(document.getElementById("root"));

const parent = React.createElement("div", {id: "parent"}, 
    React.createElement("div", {id: "child"}, [
        React.createElement("h1", {key: "h1", className: "heading-text"}, "H1 Tag"), 
        React.createElement("h2", {key: "h3", className: "heading-text"}, "Sibling H2 Tag")
    ])
)

console.log('parent', parent);
root.render(parent);
