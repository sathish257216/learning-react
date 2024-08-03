import React from 'react';
import ReactDOM from 'react-dom/client';

const jsxHeading = (<div>
        <h1 className="heading-text" key="heading1">Welcome to React!!</h1>
        <h1 className="heading-text" key="heading2">Hi Sathish!!</h1>
    </div>
    );

const root = ReactDOM.createRoot(document.getElementById('root'));

console.log('jsxHeading  ', jsxHeading);
root.render(jsxHeading);