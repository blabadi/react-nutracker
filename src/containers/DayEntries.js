import {fetchEntries} from '../actions/entriesActions'
import Entry from '../presentational/entry/Entry';
import {connect} from 'react-redux';
import React, {Component} from 'react'

class DayEntries extends Component {
    componentDidMount() {
        this.props.fetchEntries(this.props.from, this.props.to);
    }
    render() {
        return (
            <div>
                {this.props.entries.map(e => {
                    return (
                        <div key={e.id}>
                            <Entry entry={e} />
                        </div>
                    );
                })}
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
        //todo replace with state of date window
        from: '20181013',
        to: '20181013'
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DayEntries)