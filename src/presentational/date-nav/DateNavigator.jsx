import React, {Component} from 'react' 
import './DateNavigator.css';
export default class DateNavigator extends Component {
    onDateChange() {

    }
    render() {
        return (   
            <div className="date-nav-container clearfix">
                <button type="button" className="btn btn-link float-left date-control-btn-back">
                <span className="date-control fa fa-arrow-circle-o-left">&lt;</span>
                </button>
                <div className="date-display float-left ">{this.props.date}</div>
                <button  type="button" className="btn btn-link float-left date-control-btn-forward">
                    <span className="date-control fa fa-arrow-circle-o-right" aria-hidden="true">&gt;</span>
                </button>
            </div>
        );
    }
}