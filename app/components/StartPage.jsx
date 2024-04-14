'use client';
import React from 'react'
export default StartPage;
    
function StartPage({count}) {
    const [count2, setCount] = React.useState(count)
    return (
        <div>
            <p>Start page</p>
            <p>{count2}</p>
            <button onClick={() => setCount(count2+1)}>increment</button>
        </div>
    );
}