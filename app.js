import React from "react";
import ReactDOM from "react-dom/client"

//  React Element Example

const titlelement = (
    <h1>Hello World</h1>
)

const FirstComponent = () => {
   return ( 
        <div>
            {titlelement}
            <h2>Hello</h2>
        </div>
    )
}

// First way of calling a componenet inside another component. we can use the angle bracket for it.

const SecondComponent = () => {
    return (
    <div>
        <FirstComponent/>
    </div>
    )
}

// Second way of calling a componenet inside another component is inside the curly  braces with the parenthesis.

const FinalComponent = () => 
     (
        <div>
            {SecondComponent()}
        </div>
        
    )

// In the FinalComponenet code we have not used the return keyword and the curly braces to return the code. This is also valid code. New way of writing the JS.

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<FinalComponent />);

