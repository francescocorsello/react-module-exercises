import ReactDOM from 'react-dom';
import { FilteredList } from './FilteredList';

const people = [ 
    {name: 'James',  age: 15, id: 1},
    {name: 'John',   age: 31, id: 2},
    {name: 'Paul',   age: 17, id: 3},
    {name: 'Ringo',  age: 56, id: 4},
    {name: 'George', age: 68, id: 5},
  ];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FilteredList people={people}/>)