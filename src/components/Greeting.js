import {React, useState} from 'react';
import Output from './Output';

const Greeting = () => {
    const [changedText, setChangedText] = useState(false);

    const changeTextHandler = () => {
        setChangedText(true);
    }

    return (
        <div>
            <h1>Hello World</h1>
            {!changedText && <Output>It's good to see you</Output>} 
            {changedText && <Output></Output>}
            <button onClick={changeTextHandler}>Changed!</button>
        </div>
    )
}

export default Greeting;