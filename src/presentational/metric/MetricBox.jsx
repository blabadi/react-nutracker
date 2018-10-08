import React, {Component} from 'react'
import ProgressBarGauge from './ProgressBarGauge'
export default class MetricBox extends Component {
    render() {
        return (<div class="card progress-measure-container">
            <div class="card-header">{this.props.label}</div>
            <div class="card-body">
                <ProgressBarGauge current={this.props.current} target={this.props.target} />
            </div>
        </div>)
    }
}