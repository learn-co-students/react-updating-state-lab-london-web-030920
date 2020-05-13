import React, { Component } from 'react'

class DigitalClicker extends Component {

    state = {
        timesClicked: 0 
    }

    clickHandler = () => {
        this.setState( previousState => {
            return {
                timesClicked: previousState.timesClicked + 1
            }
        })
    }


    render() {
        return(
            <button onClick={this.clickHandler}>{this.state.timesClicked}</button>
        )
    }

}

export default DigitalClicker