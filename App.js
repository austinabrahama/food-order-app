import React from "react";
import ReactDOM from "react-dom/client";

var content = React.createElement("div", { id: "parent" }, React.createElement("div", { id: "child" }, [React.createElement("h1", {}, "This is h1 tag!"), React.createElement("h2", {}, "This is h3 tag!")]));
console.log('content: ', content);
var root = ReactDOM.createRoot(document.getElementById("root"));

root.render(content);