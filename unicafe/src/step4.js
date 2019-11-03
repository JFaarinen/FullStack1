import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Statistics = (props) => {
    const good = props.good
    const neutral = props.neutral
    const bad = props.bad

    if ((good+neutral+bad) == 0) return (
        <div><p>Palautetta ei ole annettu</p></div>
    )

    else 
    return(
    <div>
        <h1>Tilasto</h1>
        <p>Hyvä: {good}</p>
        <p>Tyydyttävä: {neutral}</p>
        <p>Huono: {bad}</p>
        <p>Vastauksia: {good + neutral + bad}</p>
        <p>Keskiarvo: {(good - bad) / (good + neutral + bad)}</p>
        <p>Positiivisia: {good / (good+neutral+bad) * 100}</p>
    </div>
    )
}

const App = (props) => {
    //tallenna napit omaan tilaansa

    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    return(
        <div>
            <h1>Anna palautetta</h1>
            <button onClick={ () => setGood(good + 1)}>Hyvä</button>
            <button onClick={ () => setNeutral(neutral + 1)}>Tyydyttävä</button>
            <button onClick={ () => setBad(bad + 1)}>Huono</button>
            <Statistics good={good} neutral={neutral} bad={bad}/>
        </div>
        )   
    }


ReactDOM.render(<App />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
