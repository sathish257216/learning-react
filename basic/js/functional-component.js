import React from 'react';
import ReactDOM from 'react-dom/client';

const Title = () => (<h1 className="heading-text" key="heading1">Welcome to React!!</h1>);
const testString = "Hi Sathish!!";

const JSXHeading = () => {
    return (<div>
        <Title />
        <Title></Title>
        {Title()}
        <h1 className="heading-text" key="heading2">{testString}{console.log('test')}</h1>
    </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<JSXHeading/>);