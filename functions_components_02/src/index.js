import ReactDOM from 'react-dom/client';
import { Sum } from './Sum';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sum arr={[0, 1, 1, 2, 3, 5, 8,]}/>)