import React, { Component } from "react";
import { connect } from "react-redux";

class Login extends Component{

    state={
        user: {}
    }

    handleSelect = (e) => {
        e.preventDefault();

    }


    render() {
        const{ users } = this.props

        const usersArr = Object.values(users)

        return (
            <div className="login-page">

                <h3 className="center">Login</h3>
                <div className="select-user">
                    <p> Welcome to Would You Rather!</p>
                    <p>  Please sign in. </p>
                <label htmlFor="user-select"
                        className="select-label">Choose User: </label>
                <select
                    id="user-select"
                    onChange={this.handleSelect}>
                {usersArr.map((user, index)=> (
                        <option
                            key={index}
                            value={user}
                        >{user.id}</option>
                        ))}
                    </select>
                </div>
            </div>
        );
    }
}

function mapStateToProps({ users }){
        return {
            users
        }
}

export default connect(mapStateToProps)(Login)