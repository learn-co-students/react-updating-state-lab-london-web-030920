// Code DigitalClicker Component Here
import React, {Component} from 'react';

class DigitalClicker extends Component {

    constructor() {
        super()

        this.state = {
            timesClicked: 0
        }
    }

    handleClick = () => {
        let incrementClick = this.state.timesClicked + 1
        
        this.setState({
            timesClicked: incrementClick
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}><label>{this.state.timesClicked}</label></button>
            </div>
        )
    }
}

export default DigitalClicker