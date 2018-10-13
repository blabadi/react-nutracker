import React, {Component} from 'react';
import FoodSearch from './FoodSearch';
import TargetsMetrics from './TargetsMetrics'
import { connect } from 'react-redux';
import { loadUser} from '../actions/userActions';
import {fetchEntries} from '../actions/entriesActions'
import Entry from '../presentational/entry/Entry';
import DayEntries from './DayEntries';
import DateNavigator from '../presentational/date-nav/DateNavigator';

class Dashboard extends Component {
    componentDidMount() {
        this.loadDashboard();
    }

    loadDashboard() {
        Promise.all([
            this.props.loadUser()
        ]).catch(err=> console.log(err));
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <div className="mb-4">
                        Hello, {this.props.user.name}
                    </div>
                    <div className="mb-4">
                        <FoodSearch></FoodSearch>
                    </div>
                    <div className="mb-4">
                        <TargetsMetrics/>
                    </div>
                    <div className="mb-3">
                        <DateNavigator date="Today"/>
                    </div>
                    <DayEntries/>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    loadUser: name => dispatch(loadUser('bashar'))
})

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);