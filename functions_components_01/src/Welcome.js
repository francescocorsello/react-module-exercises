// Rewrite the Welcome component to be a function component.

import ReactDOM from 'react';

export function Welcome(props) {
    return (
        <div>
            <h1>Hello, {props.name}! </h1>
        </div>
    )
}