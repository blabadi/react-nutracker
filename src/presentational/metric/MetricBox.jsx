import React, {Component} from 'react'
import ProgressBarGauge from './ProgressBarGauge'
import Util from '../../Util';

export default class MetricBox extends Component {
    render() {
        return (<div className="card progress-measure-container">
            <div className="card-header">{Util.titleCase(this.props.label)}</div>
            <div className="card-body">
                <ProgressBarGauge current={this.props.current} target={this.props.target} />
            </div>
        </div>)
    }
}