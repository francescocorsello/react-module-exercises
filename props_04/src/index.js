// What happens if the name prop is a JSX expression instead of a string? 
// How do you pass a prop that contains a JSX expression? 
// Modify the value passed to the name prop so that it's contained within a strong tag.



import ReactDOM from 'react-dom';
import { Welcome } from "./Welcome";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Welcome name={<strong>Carlo</strong>}  age={66}/>)