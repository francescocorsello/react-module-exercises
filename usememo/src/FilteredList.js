// Create a FilteredList component that receives a list of objects each containing a name, an id and a age prop. 
// The FilteredList component should render only the items of the list whose age is greater than 18, 
// and the filtering should only happen when the list changes. Use useMemo to memoize the filtered list.


import React, { useMemo } from 'react';

export function FilteredList ({ people }){
    const filteredList = useMemo(() => {
        return people.filter(item => item.age > 18);
    }, [people]);

    return (
        <ul>
        {filteredList.map(item => (<li key={item.id}>{item.name}, {item.age}</li>))}
        </ul>
    );
};