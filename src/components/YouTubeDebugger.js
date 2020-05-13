import React, { Component } from 'react' 

class YouTubeDebugger extends Component {

    state = {
        errors: [],
        user: null,
        settings: {
          bitrate: 8,
          video: {
            resolution: '1080p'
          }
        }
      }

     clickHandler1 = () => {
        this.setState({
          settings: {
            ...this.state.settings,
            bitrate: 12
          }
        });
      };

      clickHandler2 = () => {
        this.setState(previousState => {
            return {
                settings: { ...previousState.settings, video: {resolution: '720p'} } 
            }
        })
    }


    render() {
        return (
        <div>
            <button class="bitrate" onClick={this.clickHandler1}>{this.state.settings.bitrate}</button>
            <button class="resolution" onClick={this.clickHandler2}>{this.state.settings.video.resolution}</button>
        </div>
        )
    }

}

export default YouTubeDebugger