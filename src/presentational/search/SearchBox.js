import React, { Component } from 'react';
import './Search.css';

class SearchBox extends Component {
    state = {
        term: ''
    };

    onTermChange = (e) => {
        e.preventDefault();
        const value = e.target.value;
        this.setState({term : value});
        this.props.onTermChange(value);
    }

    onResultClick = (e, result) => {
        e.preventDefault();
        this.setState({term: ''});
        this.props.onResultClick(result);
    }
    
    renderResults() {
        if (this.props.results.length > 0) {
            return (
            <div className="search-result-list">
                {
                    this.props.results.map(r => {
                        return <div key={r.key} className="search-result" onClick={ (e) => { this.onResultClick(e, r)} }>{r.text}</div>
                    })
                }
            </div>
            );
        }
    }
    
    render() {
        return (
            <div className="card">
                <div className="card-header">{this.props.title}</div>
                <div className="card-body">
                    <div>
                        <input 
                            className="form-control" 
                            placeholder={this.props.placeholderText} 
                            value={this.state.term}
                            onChange={this.onTermChange} />
                    </div>
                    {this.renderResults()}
                </div>
            </div>
        );
    }
}

export default SearchBox;