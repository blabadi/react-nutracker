import React, {Component} from 'react';
import FoodSearch from './FoodSearch';

class Dashboard extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <FoodSearch></FoodSearch>
                </div>
            </div>
        );
    }



}
export default Dashboard;