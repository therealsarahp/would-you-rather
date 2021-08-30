import React, { Component } from "react";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";


class Nav extends Component{
    render(){

        return (

            <nav className='nav'>
                <ul>
                    <div className='nav-left'>
                        <li>
                            <NavLink to='/' exact activeClassName='active'>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/add' activeClassName='active'>
                                New Question
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/leaderboard' activeClassName='active'>
                                LeaderBoard
                            </NavLink>
                        </li>
                    </div>
                    <div className='nav-right'>
                        <li>
                                <span>Hello, {this.props.authUser}  </span>
                                        <NavLink to='/logout' activeClassName='active'>
                                            <span>      Logout</span>
                                        </NavLink>
                        </li>
                    </div>
                </ul>
            </nav>


        )
    }
}

function mapStateToProps({ authUser, users }){
    return {
        authUser,
        users
    }
}

export default connect(mapStateToProps)(Nav)