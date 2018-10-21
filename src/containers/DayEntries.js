import {fetchEntries} from '../actions/entriesActions'
import Entry from '../presentational/entry/Entry';
import {connect} from 'react-redux';
import React, {Component} from 'react'
import Util from '../Util';

class DayEntries extends Component {
    componentDidMount() {
        this.props.fetchEntries(Util.dateToDatestamp(this.props.from), Util.dateToDatestamp(this.props.to));
    }

    // https://github.com/reduxjs/redux/issues/448
    componentWillReceiveProps(nextProps) {
        if (nextProps.from !== this.props.from && nextProps.to !== this.props.to) {
            this.props.fetchEntries(Util.dateToDatestamp(nextProps.from), 
                Util.dateToDatestamp(nextProps.to))
        }
    }

    renderEntries() {
        return this.props.entries.map(e => {
            return (
                <div key={e.id}>
                    <Entry entry={e} />
                </div>
            )
        });
    }

    render() {
        return (
            <div>
                { this.props.entries.length > 0 ? this.renderEntries() : (<em>No entries yet.</em>)} 
            </div>
        );
    }

    
}

const mapDispatchToProps = dispatch => ({
    fetchEntries: (s, e) => dispatch(fetchEntries(s, e))
})

const mapStateToProps = (state) => {
    return {
        entries: state.entries,
        from: state.period.from,
        to: state.period.to
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DayEntries)