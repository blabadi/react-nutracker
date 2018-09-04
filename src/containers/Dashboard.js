
import React, {Component} from 'react';
import SearchBox from '../components/search/SearchBox';
import {instance as foodRepo} from '../repos/FoodRepo'
class Dashboard extends Component {
    state = {
        searchResults: []
    }

    onTermChange = (term) => {
        console.log(term);
        const results = foodRepo.findFood(term);
        this.setState({ searchResults : results.map(food =>  {
                return { 
                    key: food.id, 
                    text: food.name + ", " + food.unit
                }
            }) 
        });
        console.log(results);
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <SearchBox 
                        placeholderText="Search for food" 
                        title="Add New Entry"
                        onTermChange={this.onTermChange}
                        results={this.state.searchResults}></SearchBox>
                </div>
            </div>
        );
    }



}
export default Dashboard;