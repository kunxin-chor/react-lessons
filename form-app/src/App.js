import React, {useState} from 'react';
import logo from './logo.svg';
import Form from './Form'
import './App.css';


function App() {
    const [count, setCount] = useState(0);
    let increaseCount = function() {
        setCount(count + 1)
    }
    return (
        <div>
            <p>Number of times clicked: {count}</p>
            <button onClick={increaseCount}>Increase</button>
            <Form/>
        </div>

    )
}

export default App;
