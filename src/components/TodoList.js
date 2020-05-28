import React, {Component} from 'react';
import TodoItem from '../common/TodoItem';
import data from '../data';

// function TodoList() {
//     // data.map(function() {})
//     const todoItemComp = data.map((item) => {
//         return <TodoItem key={item.id} item={item} />
//     })
//     return (
//         <div className="todo-list">
//             {todoItemComp}
//         </div>
//     );
// }

class TodoList extends Component {
    constructor() {
        super();
        this.state = {
            todoData: data
        }
        this.onDoneChange = this.onDoneChange.bind(this);
    }

    onDoneChange(id) {
        this.setState(state => {
            const newtodoData = state.todoData.map(data => {
                if(data.id === id) {
                    data.done = !data.done;
                }
                return data;
            })
            console.log("toc....."+ JSON.stringify(state.todoData ))
            console.log("newc....."+ JSON.stringify(newtodoData ))
            return newtodoData
           
        })
        
    }

    render() {
        const todoItemComp = this.state.todoData.map((item) => {
            return <TodoItem key={item.id} item={item} onDoneChange={this.onDoneChange}/>
        })
        return (
            <div className="todo-list">
                {todoItemComp}
            </div>
        );
    }
}

export default TodoList;