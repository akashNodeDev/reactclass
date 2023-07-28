import React from "react";
import ReactDOM from "react-dom/client"

let heading1 = React.createElement("h1",{id:"first"},"Heading1");

let heading2 = React.createElement("h2",{id:"second"},"Heading2");

let container = React.createElement("div",{id:"containerDiv"},[heading1,heading2]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);

