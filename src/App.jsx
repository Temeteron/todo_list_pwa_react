import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import uuid from 'uuid';
import localForage from 'localforage';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import style from './components/style';
import About from './components/pages/About';
import './App.css';


class App extends Component {
  state = {
    todos: []
  }

  initObj = [
      {
        id: 1,
        title: 'ToDo number 1',
        completed: false
      },
      {
        id: 2,
        title: 'ToDo number 2',
        completed: false
      },
      {
        id: 3,
        title: 'ToDo number 3',
        completed: false
      }
  ]


  initLocalForage() {
    localForage.getItem('todos').then(res => {
      console.table(res);
      if (res != null) {
        this.setState({ todos: res });
      } else {
        console.log('WILL INIT DB');
        localForage.setItem('todos', this.initObj).then((res) => {
          console.log('Setting LF first time');
          this.setState({ todos: res });
        });
      }
    });

    localForage.clear();
  }

  componentDidMount() {
    this.initLocalForage();
  }

  // Toggle Complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }

  // Delete Todo
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] })
  }

  // Add Todo
  addTodo = (title) => {
    let newToDo = {
      title,
      completed: false,
      id: uuid()
    };

    this.setState({ todos: [...this.state.todos, newToDo] })
  }

  render() {
    return (
      <Router>
        <div style={style.app}>
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
              </React.Fragment>
            )} />
            <Route path="/about" component={About} />
          </div>  
        </div>
      </Router>
    );
  }
}

export default App;
