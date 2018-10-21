import React, {Component} from 'react' 
import './Entry.css';
import Util from '../../Util';
export default class Entry extends Component {
    render() {
        const entry = this.props.entry;
        return (
            <div className="card entry-card">
                <div className="card-body">
                <h4 className="card-title">{entry.food.name}</h4>
                <div className="card-subtitle mb-2 text-muted">{entry.amount} serving<small>(s)</small>, {entry.food.unit} each</div>
                    <p className="card-text">
                        <span className="badge badge-info"><span className="badge badge-light mr-1">{round(entry.food.calories * entry.amount)}</span> Calories</span>
                        <span className="badge badge-success"><span className="badge badge-light mr-1">{round(entry.food.carbs * entry.amount)}</span>Carbs</span>
                        <span className="badge badge-warning "><span className="badge badge-light  mr-1">{round(entry.food.fat * entry.amount)}</span> Fats</span>
                        <span className="badge badge-danger"><span className="badge badge-light mr-1">{round(entry.food.protein * entry.amount)}</span> Protein</span>
                    </p>
                    <p className="card-text">
                        <small className="text-muted">{Util.formatDateTime(entry.createdAt)}</small>
                    </p>
                    <button  type="button" className="btn btn-link">
                        <span className="fa fa-pencil"></span> Edit
                    </button>
                    <button  type="button" className="btn btn-link">
                        <span className="fa fa-trash-o"></span> Remove
                    </button>
                </div>
            </div>
        )
    }
}

const round = (val) => {
    return Math.round(val);
}

