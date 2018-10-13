import React, {Component} from 'react'
import {connect} from 'react-redux'
import MetricsList from '../presentational/metric/MetricsList'
import {calculateMetrics} from '../actions/metricsActions'

class TargetsMetrics extends Component {
    componentDidMount() {
        this.props.calculateMetrics();
    }

    render() {
        return (<MetricsList metrics={this.props.metrics} />);
    }
}

const mapStateToProps = (state) => {
    if (state.user.profile) {
        //TODO: use entries to calculate progress
        return {
            metrics: [
                {name: 'calories', target: state.user.profile.targets.calories, current: 907},
                {name: 'proteins', target: state.user.profile.targets.protein, current: 48},
                {name: 'fats', target: state.user.profile.targets.fats, current: 23},
                {name: 'carbs', target: state.user.profile.targets.carbs, current: 112}
            ]
        }
    } else {
        return { metrics: [] };
    }
}
const mapDispatchToProps = (dispatch) => ({
    calculateMetrics
})

export default connect(
    mapStateToProps, mapDispatchToProps
)(TargetsMetrics)