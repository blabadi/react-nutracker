import SearchBox from '../presentational/search/SearchBox';
import * as searchFoodActions from '../actions/searchFoodActions'
import {connect} from 'react-redux';

const mapDispatchToProps = dispatch => ({
    onTermChange: term => {
        return dispatch(searchFoodActions.fetchFood(term))
    }
})

const mapStateToProps = (state) => {
    return {
        placeholderText: "Search for food",
        title: "Add New Entry",
        results: state.searchFoodResult.results 
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchBox)
