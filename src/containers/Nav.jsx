import React, {Component} from 'react' 
import { AuthStore } from '../repos/UserRepo';
import {NavLink, withRouter} from 'react-router-dom'
import { connect } from 'react-redux';

//TODO make responsivity better
class Nav extends Component {
    render() {
        if (AuthStore.isAuthenticated) {
            return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light" >
                <NavLink className="navbar-brand d-none d-lg-inline" to="/">NuTracker</NavLink>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="active" to="/dashboard">Dashboard</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/profile">Profile</NavLink>
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                    <div className="user-name-container">
                        <span>{this.props.username}</span>
                    </div>
                    </li>
                </ul>
            </nav>)
        }
        return null;
    }
}

const mapStateToProps = (state) => ({
    username : state.user.name
});

//had to add with router here because this component will not be rerendered since it's not
//a router component and no props change happen currently since user is loaded in dashboard
//if we remove this the routing will work but the navigation links won't reflect the current active link
export default withRouter(connect(mapStateToProps, {})(Nav));