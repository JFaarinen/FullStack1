import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    const Header = (props) => {
        return(<div>
            <h1>{props.course}</h1>
        </div>)
    }
    
    const course = 'Half Stace application development' 
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14

    const Content = (props) => {
        return (
            <div>
                <Part part={part1} excercises={exercises1}/>
                <Part part={part2} excercises={exercises2}/>
                <Part part={part3} excercises={exercises3}/>
            </div>
            
        )
    }

    const Part = (props) => {
        return (
            <p>{props.part} {props.excercises}</p>
        )
    }
    
    const Total = (props) => {
        return (
            <p>Number of exercises {props.total}</p>
        )
    }

    return (
        <div> 
            <Header course={course} />
            <Content /> 
            <Total total = {exercises1 + exercises2 + exercises3} />
        </div>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));

