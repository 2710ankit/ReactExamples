import React from 'react';
import './style.css';

function add() {
    alert();
}

class Todo extends React.Component{

    state = {
        value : "",
        todo : []
    }
     onInputChange = (event)=>{
        this.setState({
            value : event.target.value
        })
    }

    add = ()=>{
    if(this.state.value == "")
    return;
    const todos = this.state.todo;
    todos.push(this.state.value);
    this.setState({
        todo:todos,
        value:""
    })

    }
    
    render(){
        return (
            <div className='container'>
                <p> this will return todo file</p>
                <div className='input_container'>
                    <input onChange = {this.onInputChange}
                    className='textbox' placeholder="Enter Text"
                    value = {this.state.value}
                    >
                    </input>
                    <button onClick={ this.add } 
                    className='btn'
                    >
                    Submit
                    </button>
                </div>
                <div>
                    <ul>
                        {
                            this.state.todo.map((num)=>{
                                return <li>{num}</li>
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }


}

export default Todo;