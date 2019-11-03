import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    const course = {
        name: 'Half Stace application development', 
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10
            },
            {
                name: 'Using props to pass data',
                exercises: 7
            },
            {
                name: 'State of a component',
                exercises: 14
            }
        ]
    }

    const Header = (props) => {
        return(<div>
            <h1>{props.course}</h1>
        </div>)
    }

    const Content = (props) => {
        return (
            <div>
                <Part part = {props.parts[0]}/>
                <Part part = {props.parts[1]}/>
                <Part part = {props.parts[2]}/>
            </div>       
        )
    }

    const Part = (props) => {
        return (
            <p>{props.part.name} {props.part.exercises}</p>
        )
    }

    const Total = (props) => {

        return (
            <p>Number of exercises {props.parts[0].exercises+props.parts[1].exercises+props.parts[2].exercises}</p>
        )
    }

    return (
        <div> 
            <Header course={course.name} />
            <Content parts={course.parts}/> 
            <Total parts={course.parts} />
        </div>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));

