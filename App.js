import React from "react";
import ReactDOM from "react-dom/client";

let Title = () => <h1>
    Hi! I am the Title
</h1>;

let Content = () => <div>
    <Title />
    <h2>Hi! I am the Subtitle</h2>
</div>;

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Content />);