import {connect} from 'react-redux';
import DateNavigator from '../presentational/date-nav/DateNavigator'
import {changePeriod} from '../actions/dateNavActions'

const mapDispatchToProps = dispatch => {
    return {
        onDateChanged: (from, to) => dispatch(changePeriod(from, to)),
    };
};

const mapStateToProps = (state) => {
    return {
        from: state.period.from,
        to: state.period.to
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DateNavigator)