import React from 'react';
import { Entry } from '../model/Entry';

export default class EntryCreationForm extends React.Component {
    state = {
        units: 0
    }

    onCreateClick = (e) => {
        e.preventDefault();
        this.props.onCreateClick(new Entry(this.state.units, this.props.selectedFood, this.props.date));
    }

    onCancelClick = (e) => {
        e.preventDefault();
        this.props.onCancelClick();
    }


    onValueChange = (e) => {
        e.preventDefault();
        this.setState({units: e.target.value});
    }

    render() {
        return (
            <div className="card">
                <div className="card-header">{this.props.title}</div>
                <div className="card-body">
                    <div>
                        <label>{this.props.selectedFood.name}</label>
                        <input 
                            className="form-control" 
                            placeholder={`servings consumed - ${this.props.selectedFood.unit}`} 
                            value={this.state.units}
                            onChange={this.onValueChange} />
                    </div>
                    <button onClick={this.onCreateClick}>Add</button>
                    <button onClick={this.onCancelClick}>Cancel</button>
                </div>
            </div>
        );
    }

}