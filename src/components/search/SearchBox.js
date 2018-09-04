
import React, { Component } from 'react';

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
                    <div className="search-results">
                    {
                        this.props.results.map(r => {
                            return <div key={r.key} className="result-row">{r.text}</div>
                        })
                    }
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchBox;