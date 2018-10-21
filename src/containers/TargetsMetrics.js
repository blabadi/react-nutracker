import React, {Component} from 'react'
import {connect} from 'react-redux'
import MetricsList from '../presentational/metric/MetricsList'
import {calculateMetrics} from '../actions/metricsActions'

class TargetsMetrics extends Component {
    componentWillReceiveProps() {
        this.props.calculateMetrics();
    }

    render() {
        return (<MetricsList metrics={this.props.metrics} />);
    }
}

const mapStateToProps = (state) => {
    if (state.user.profile && state.entries) {
        const periodMetrics = {calories: 0, proteins: 0, fats: 0, carbs: 0};
        state.entries.forEach((ent) => {
            periodMetrics.calories += Math.round(ent.amount * ent.food.calories);
            periodMetrics.carbs += Math.round(ent.amount * ent.food.carbs);
            periodMetrics.fats += Math.round(ent.amount * ent.food.fat);
            periodMetrics.proteins += Math.round(ent.amount * ent.food.protein);
        });
        return {
            metrics: [
                {name: 'calories', target: state.user.profile.targets.calories, current: periodMetrics.calories},
                {name: 'proteins', target: state.user.profile.targets.protein, current: periodMetrics.proteins},
                {name: 'fats', target: state.user.profile.targets.fats, current: periodMetrics.fats},
                {name: 'carbs', target: state.user.profile.targets.carbs, current: periodMetrics.carbs}
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