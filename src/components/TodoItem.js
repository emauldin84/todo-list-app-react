import React from 'react';
import PropTypes from 'prop-types'
import { join } from 'path';

export class TodoItem extends React.Component {
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted', 
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    render() {
        const { id, title } = this.props.todo;
        return(
            <div style={ this.getStyle() }>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {' '}
                {title}
                {/* <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>X</button> */}
                <button onClick={() => {
                    this.props.delTodo(id)
                }} style={btnStyle}>X</button>
                </p>
            </div> 
        )
    }
}



// PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

const btnStyle = {
    background: 'rgba(255, 0, 0, .6',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    curser: 'pointer', 
    float: 'right'
}



export default TodoItem;