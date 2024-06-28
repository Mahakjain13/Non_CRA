import ReactDOM from 'react-dom';
import React from 'react';


const App = () => {
    return (
        <><div className='container bg-warning'>
        <h1> Hello from App component</h1>
        </div>
        </>
     );
}
 
let rootNode = ReactDOM.createRoot(document.getElementById('root'));
rootNode.render(<App/>);
