import ReactDOM from 'react-dom';
import { Counter } from './Counter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Counter  start={10} amount={10} interval={200} />)