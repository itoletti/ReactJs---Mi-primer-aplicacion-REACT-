import React, { Component } from 'react';

class TaskForm extends Component{
    state = {
        titulo : '',
        descripcion : ''
    }

    onAceptar = (e) => {
        // console.log('Submiting...');
        // console.log(this.state);
        this.props.addTask(this.state.titulo, this.state.descripcion)
        e.preventDefault()
    }

    onCambio = (e) => {
        // console.log(e.target.name, e.target.value)
        this.setState ({
            [e.target.name] : e.target.value
        })
    }

    render() {
        return(
            <form onSubmit={this.onAceptar}>
                <input type='text' 
                    name='titulo' 
                    placeholder='Ingresar nombre tarea' 
                    onChange={this.onCambio} 
                    value={this.state.title}>
                </input>
                <br></br>
                <br></br>
                <textarea name='descripcion' 
                    placeholder='ingresar descripcion de la tarea' 
                    onChange={this.onCambio} 
                    value={this.state.descripcion}>
                </textarea>
                <input type='submit'></input>
            </form>
        )
    }
}

export default TaskForm;