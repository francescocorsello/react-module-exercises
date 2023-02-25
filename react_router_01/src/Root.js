// Create an App component that wraps a Routes component and add 
// a single Route to the / path that renders the Welcome component from Function Components 01,
// passing it a name prop. Render the App component within a BrowserRouter component.

import { BrowserRouter } from "react-router-dom";
import { App } from "./App";

export function Root(){
    return(
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    )
}
