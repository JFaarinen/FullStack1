import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const anecdotes = [
    'If it hurts, do it more often',
    'Addind manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time... The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const arvoAnekdootti = () => {
    const arvottu = Math.floor(Math.random()*6)
    console.log({arvottu})
    return arvottu
}

const App = (props) => {
    const [selected, setSelected] = useState(0)

    return (
        <div>
            <p>{props.anecdotes[selected]}</p>
            <p><button onClick={ () => setSelected(arvoAnekdootti)}>Arvo uusi anekdootti</button></p>
        </div>
    )
}

ReactDOM.render(<App anecdotes={anecdotes}/>, document.getElementById('root'));

