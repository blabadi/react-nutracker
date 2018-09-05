import SearchBox from '../presentational/search/SearchBox';
import {searchFood} from '../actions'
import {connect} from 'react-redux';

const mapDispatchToProps = dispatch => ({
    onTermChange: term => dispatch(searchFood(term))
})

const mapStateToProps = (state) => {
    return {
        placeholderText: "Search for food",
        title: "Add New Entry",
        results: state.searchFoodResult 
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchBox)
