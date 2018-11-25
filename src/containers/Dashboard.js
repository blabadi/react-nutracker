import React, {Component} from 'react';
import TargetsMetrics from './TargetsMetrics'
import { connect } from 'react-redux';
import { loadUser} from '../actions/userActions';
import DayEntries from './DayEntries';
import EntriesDateNavigator from './EntriesDateNavigator';
import EntryCreation from './EntryCreation';

class Dashboard extends Component {
    componentDidMount() {
        this.loadDashboard();
    }

    loadDashboard() {
        Promise.all([
            this.props.loadUser('bashar')
        ]).catch(err=> console.log(err));
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <div className="mb-4">
                        <EntryCreation></EntryCreation>
                    </div>
                    <div className="mb-4">
                        <TargetsMetrics/>
                    </div>
                    <div className="mb-3">
                        <EntriesDateNavigator/>
                    </div>
                    <DayEntries/>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    loadUser: name => dispatch(loadUser(name))
})

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);