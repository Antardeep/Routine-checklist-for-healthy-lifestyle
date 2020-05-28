import React, { Component } from 'react';

// function TodoItem(props) {
//     return (
//         <div style={{ display: !props.item.name && "none" }}>
//             <div className="todo-item" >
//                 <input type="checkbox" checked={props.item.done}/>
//                 <p>{props.item.name}</p>
//             </div>
//             <p className="desc">{props.item.desc}</p>
//         </div>
//     );
// }

class TodoItem extends Component {

    render() {
        const item = this.props.item;
        return (
            <div style={{ display: !item.name && "none" }}>
                <div className="todo-item" >
                    <input
                        type="checkbox"
                        checked={item.done}
                        onChange={() => this.props.onDoneChange(item.id)}
                    />
                    <p className={item.done && "done"}>{item.name}</p>
                </div>
                <p className="desc">{item.desc}</p>
            </div>
        );
    }
}

export default TodoItem;