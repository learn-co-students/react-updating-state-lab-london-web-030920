import React from 'react'

class DigitalClicker extends React.Component{

    state = {
        timesClicked: 0
    }

updateTime = () => {
    
    this.setState(previousState => ({
        timesClicked: previousState.timesClicked+1
    }))
}

    render(){
        console.log(this.state.timeClicked)
        return (
            <button onClick={this.updateTime}>{this.state.timesClicked}</button>
        )
    }
}

export default DigitalClicker