import React from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import tasks from './samples/task.json';

//components
import Tasks from './components/tasks.js';
import TaskForm from './components/taskform.js';
import Posts from './components/posts.js'

class App extends React.Component{
  state = {
    tareas : tasks
  }
  
  addTask = (title, description) => {
    let newTask  = { 
      id : this.state.tareas.length,
      titulo : title,
      descripcion : description,
      realizada : false
    }
    this.setState({
      tareas : [...this.state.tareas, newTask]  
    });
  }

  deleteTask = (id) => {
    const newTareas = this.state.tareas.filter(task => task.id !== id); //genero un nuevo arreglo de tareas con todas aquellas tareas del arreglo cuyo id sea diferente al id del argumento
    // console.log(newTareas);
    this.setState({tareas : newTareas})
  }

  checkDone = (id) => {
    const newTareas = this.state.tareas.map(task => {
        if (task.id === id)
          task.realizada = !task.realizada;
        return task;
      }
    );
    console.log(newTareas);
    this.setState({tareas : newTareas})
  }

  render(){
    return <div>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/post'>Posts</Link>
            </li>
          </ul>
        </nav>

        <Route exact path='/' render = { () => { 
          return <div>
             <TaskForm addTask={this.addTask}></TaskForm>
             <Tasks tasks={this.state.tareas} deleteTask={this.deleteTask} checkDone={this.checkDone}></Tasks>            
          </div>
        }}>
        </Route>
        <Route path='/post' component={Posts}></Route>
      </Router>
    </div>
  }
}

export default App;