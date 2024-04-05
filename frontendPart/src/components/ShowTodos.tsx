import React from 'react';

export function ShoWTodos({ title, description }) {
    return (
        <div>
            <h3>Title: {title}</h3>
            <p>Description: {description}</p>
        </div>
    );
}
