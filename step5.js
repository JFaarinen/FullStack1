import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Button = ({handleClick, text}) => (
    <button onClick={handleClick}>{text}</button>
)

const Statistic = ({otsikko, arvo}) => (
    <p>{otsikko}: {arvo}</p>
)

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
        <Statistic otsikko="Hyviä" arvo={good} />
        <Statistic otsikko="Tyydyttäviä" arvo={neutral} />
        <Statistic otsikko="Huonoja" arvo={bad} />
        <Statistic otsikko="Vastauksia" arvo={good + neutral + bad} />
        <Statistic otsikko="Keskiarvo" arvo={(good - bad) / (good + neutral + bad)} />
        <Statistic otsikko="Positiivisia" arvo={good / (good+neutral+bad) * 100} />
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
            <Button handleClick={ () => setGood(good + 1)} text="Hyvä"/>
            <Button handleClick={ () => setNeutral(neutral + 1)} text="Tyydyttävä" />
            <Button handleClick={ () => setBad(bad + 1)} text="Huono" />
            <Statistics good={good} neutral={neutral} bad={bad}/>
        </div>
        )   
    }


ReactDOM.render(<App />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
