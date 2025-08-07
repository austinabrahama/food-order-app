var content = React.createElement("div", { id: "parent" }, React.createElement("div", { id: "child" }, [React.createElement("h1", {}, "This is h1 tag!"), React.createElement("h2", {}, "This is h2 tag!")]));
console.log('content: ', content);
var root = ReactDOM.createRoot(document.getElementById("root"));

root.render(content);