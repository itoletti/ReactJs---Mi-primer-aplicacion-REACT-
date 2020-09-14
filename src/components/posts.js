import React, { Component } from 'react'

export default class posts extends Component {
    state = { 
        posts : []
    }

    async componentDidMount() {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await res.json(); 
        // console.log(data);
        this.setState({ posts : data});
    }
    
    render() {
        return (
            <div>
                <h1>Posts</h1>
                {
                    this.state.posts.map(envio => {
                        return <div key={envio.id}>
                            <h2>{envio.title}</h2>
                            <p>{envio.body}</p>
                        </div>
                    })
                }
            </div>
        )
    }
}
