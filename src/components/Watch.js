import React, { Component } from 'react'




export default class Watch extends Component {
    constructor(props){
        super(props);

        this.state ={
            time:0
        };

        timer(event){
            //create variable event when buttons are clicked
            const buttonClicked = event.target.id
            //if statement that stats what each button does
            //to track time, use JS method setInterval()
            if(buttonClicked === 'start'){
                let id = setInterval(this.startTimer ,1000) //1000 is in milliseconds = 1 second
                this.setState({clearId:id}); //To update State properly, use setState()
            } else if(buttonClicked === 'reset'){
                this.setState(time:0) //once reset button is clicked, reset time to 0
            } else if (buttonClicked === 'pause'){
                clearInterval(this.state.time.clearId); //clearInterval JS method, stops the time
            }
        }
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
