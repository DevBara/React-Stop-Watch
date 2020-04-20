import React, { Component } from 'react'




export default class Watch extends Component {
    constructor(props){
        super(props);

        this.state ={
            time:0
        };
        //Before correct this, buttons were returning undefined
        this.timer =this.timer.bind(this);
        this.startTimer =this.startTimer.bind(this);
    }

        timer(event){
            event.preventDefault();
            //create variable event when buttons are clicked
            const buttonClicked = event.target.id;
            //if statement that stats what each button does
            //to track time, use JS method setInterval()
            if(buttonClicked === 'start'){
                let id = setInterval(this.startTimer ,1000); //1000 is in milliseconds = 1 second
                this.setState({clearId:id}); //To update State properly, use setState()
            } else if(buttonClicked === 'reset'){
                this.setState({time:0}); //once reset button is clicked, reset time to 0
            } else if (buttonClicked === 'pause'){
                clearInterval(this.state.clearId); //clearInterval JS method, stops the time
            }
        }
        startTimer(){
            setInterval(this.setState({ time: this.state.time + 1}), 1000);
        }
    
        //If statement above changes state of the buttons
        //Doesnt start the timer
        //Create a function that increases the time by 1 second

    render() {
        return (
            <div>
            {/* Header 1 should be the time that is called from state */}
               <h1>{this.state.time}</h1> 
               
                <button onClick ={this.timer} id ="start">Start</button>
                <button onClick ={this.timer} id= "pause">Pause</button>
                <button onClick ={this.timer} id ="reset">Reset</button>
            </div>
        );
    }
}
