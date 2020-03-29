import React, { Component } from 'react'




export default class Watch extends Component {
    constructor(props){
        super(props);

        this.state ={
            time:0
        };
    }
    render() {
        return (
            <div>
            {/* Header 1 should be the time that is called from state */}
               <h1>{this.state.time}</h1> 
            </div>
        )
    }
}
