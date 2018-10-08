import React, {Component} from 'react';
import FoodSearch from './FoodSearch';
import TargetsMetrics from './TargetsMetrics'
import { connect } from 'react-redux';
import {loadDashboard} from '../actions/dashboardActions';

class Dashboard extends Component {
    componentDidMount() {
        this.props.loadDashboard();
    }
    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <FoodSearch></FoodSearch>
                    <TargetsMetrics/>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    loadDashboard
})

//TODO create reducers
const mapStateToProps = (state) => {
    return {
        profile: state.profile || {},
        entries: state.entries || []
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);