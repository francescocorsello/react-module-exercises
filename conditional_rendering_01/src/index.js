import ReactDOM from 'react-dom';
import { Welcome } from "./Welcome";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Welcome name={<strong>Carlo</strong>} age={33} />)