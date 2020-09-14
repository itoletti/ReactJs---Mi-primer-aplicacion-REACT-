import React, { Component } from 'react';
import './task.css';
import PropTypes from 'prop-types';

class Task extends Component{
    
    styleCompletada() {
        return {
            fontSize: '12px',
            color: this.props.latarea.realizada ? 'gray' : 'black',
            textDecoration: this.props.latarea.realizada ? 'line-through' : 'none'
        }
    };

    render() {
        const {latarea} = this.props;

        return <p style={this.styleCompletada()}> 
            {latarea.titulo} - 
            {latarea.descripcion} - 
            {latarea.realizada} - 
            {latarea.id}
            <input type='checkbox' checked={this.props.latarea.realizada} onChange={this.props.checkDone.bind(this, latarea.id)}></input>
            <button type='btnDelete' onClick={this.props.deleteTask.bind(this, latarea.id)}>X</button>
        </p>
    }
}

Task.propTypes = {
    latarea : PropTypes.object.isRequired
}

export default Task;
