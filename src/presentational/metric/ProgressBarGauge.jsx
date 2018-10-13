import React, {Component} from 'react'

export default class ProgressBarGauge extends Component {

    calculateProgressPercentage() {
        return (this.props.current / this.props.target) * 100.0
    }

    render() {
        const percentage = this.calculateProgressPercentage();
        return(
            <div>
                <div className="progress">
                    <div className="progress-bar"
                        role="progressbar"
                        aria-valuenow={percentage}
                        aria-valuemin="0" 
                        aria-valuemax="100"
                        style={{width: percentage + '%'}}>
                    </div>
                </div>
                <div>{this.props.current} / {this.props.target}</div> 
            </div>
        )
    }
}