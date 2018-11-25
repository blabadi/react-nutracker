import {connect} from 'react-redux';
import React, {Component} from 'react';
import SearchBox from '../presentational/search/SearchBox';
import EntryCreationForm from './EntryCreationForm';
import * as searchFoodActions from '../actions/searchFoodActions'
import * as entryActions from '../actions/entriesActions'

class EntryCreation extends Component {
    render() {
        const createMode = this.props.createMode;
        if (createMode) {
            return <EntryCreationForm {...this.props} />
        }
        return <SearchBox {...this.props} />
    }
}

const mapDispatchToProps = dispatch => ({
    onTermChange: term => {
        return dispatch(searchFoodActions.fetchFood(term))
    },
    onResultClick: result => {
        return dispatch(searchFoodActions.selectFood(result))
    },
    onCancelClick: () => {
        return dispatch(searchFoodActions.unSelectFood()); 
    },
    onCreateClick: entry => {
        dispatch(searchFoodActions.unSelectFood());
        return dispatch(entryActions.createEntry(entry))
    }
})

const mapStateToProps = (state) => {
    return {
        placeholderText: "Search for food",
        title: "Add New Entry",
        results: state.searchFoodResult.results,
        selectedFood: state.searchFoodResult.selectedFood, 
        createMode: state.searchFoodResult.selectedFood.id,
        date: state.period.from
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EntryCreation)
