// your Bomb code here!
import React from 'react';

export default class Bomb extends React.Component {
    constructor(props){
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    decrement = () => {
        this.setState({
            timer: this.state.timer - 1
        })
    }

    render (){
        if (this.state.secondsLeft === 0) {
            return 'Boom!'
        }
        return `${this.state.secondsLeft} seconds left before I go boom!`
    }
}
