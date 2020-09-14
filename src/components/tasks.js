import React from 'react';
import Task from './task';
import PropTypes from 'prop-types';
 
class Tasks extends React.Component {
    render() { 
        return this.props.tasks.map((task, index) => <Task 
            latarea={task} 
            key={index} 
            deleteTask={this.props.deleteTask} 
            checkDone={this.props.checkDone}
        />)
    } 
}

Tasks.propTypes = {
    tasks : PropTypes.array.isRequired
}

export default Tasks;