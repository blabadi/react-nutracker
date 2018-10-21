import React, {Component} from 'react'
import MetricBox from './MetricBox';
import './MetricsList.css'
export default class MetricList extends Component {
    render() {
        return (
        <div className="metrics-list-container">
        {
            this.props.metrics.map(m => {
                return (
                    <div key={m.name} className="metric-item">
                        <MetricBox label={m.name} target={m.target} current={m.current} />
                    </div>
                )
            })
        }
        </div>
        )
    }
}