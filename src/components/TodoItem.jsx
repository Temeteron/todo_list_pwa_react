import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './style';

export class TodoItem extends Component {
  getStyle = () => {
    return {
      background: '#333',
      color: 'white',
      padding: '10px',
      borderRadius: `100px`,
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" style={style.noborder} onChange={this.props.markComplete.bind(this, id)} /> {' '}
          { title }
          <button onClick={this.props.delTodo.bind(this, id)} style={style.btnStyle}><b>X</b></button>
        </p>
      </div>
    )
  }
}

// PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
}


export default TodoItem
