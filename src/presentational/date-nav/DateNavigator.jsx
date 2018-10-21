import React, {Component} from 'react' 
import './DateNavigator.css';
import Util from '../../Util';
export default class DateNavigator extends Component {
    onDateChange(direction) {
        if (direction === -1) {
            const from = this.props.from;
            const prev = new Date(from.setDate(from.getDate() - 1));
            this.props.onDateChanged(prev, prev);
        }
        if (direction === 1) {
            const from = this.props.from;
            const prev = new Date(from.setDate(from.getDate() + 1));
            this.props.onDateChanged(prev, prev);
        }
    }
    render() {
        return (   
            <div className="date-nav-container">
                <div class="controls-container">
                    <button type="button" className="btn btn-link float-left date-control-btn-back" onClick={() => this.onDateChange(-1)}>
                    <span className="date-control fa fa-arrow-circle-o-left">&lt;</span>
                    </button>
                    <div className="date-display float-left ">{Util.formatDate(this.props.from)}</div>
                    <button  type="button" className="btn btn-link float-left date-control-btn-forward" onClick={() => this.onDateChange(1)}>
                        <span className="date-control fa fa-arrow-circle-o-right" aria-hidden="true">&gt;</span>
                    </button>
                </div>
            </div>
        );
    }
}