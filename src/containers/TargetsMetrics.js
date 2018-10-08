import {connect} from 'react-redux';
import MetricsList from '../presentational/metric/MetricsList'

const mapStateToProps = (state) => {
    return {
        metrics: [
            {name: 'calories', target: 1800, current: 907},
            {name: 'protein', target: 140, current: 48},
            {name: 'fats', target: 60, current: 23},
            {name: 'carbs', target: 230, current: 112}
        ]
    }
}

export default connect(
    mapStateToProps
)(MetricsList)