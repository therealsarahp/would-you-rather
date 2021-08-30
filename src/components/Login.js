import React, { Component } from "react";
import { connect } from "react-redux";
import {handleSetAuthUser} from "../actions/authUser";
import {Redirect} from "react-router-dom";

class Login extends Component{

    state={
        user: '',
        toHome: false,
    }

    handleSelect = (e) => {
        e.preventDefault();

        this.setState(()=>({
            user: e.target.value
        }))
        console.log("handleSelect", e.target.value)

    }

    handleSubmit= (e) => {
        e.preventDefault();

        const { dispatch } = this.props
        const { user } = this.state
        console.log("handlesetAuthUser dispatched", user)

        dispatch(handleSetAuthUser(user)
        )
        this.setState(()=>({
            user: '',
            toHome: true,
        }))
    }


    render() {


        const{ users } = this.props

        const usersArr = Object.values(users)

        if(this.state.toHome === true){
            return <Redirect to='/' />
        }

        return (
            <div className="login-page">

                <h3 className="center">Login</h3>
                <div className="select-user">
                    <p> Welcome to Would You Rather!</p>
                    <p>  Please sign in. </p>
                    <form onSubmit={this.handleSubmit} >
                        <label htmlFor="user-select"
                                className="select-label">Choose User: </label>
                        <select
                            id="user-select"
                            onChange={this.handleSelect}
                            value={this.state.authUser}>
                            <option
                                value="null">Select...</option>
                        {usersArr.map((user, index)=> (
                                <option
                                    key={index}
                                    value={user.id}
                                >{user.id}</option>
                                ))}
                            </select>
                        <button
                            >
                            SUBMIT
                        </button>

                    </form>
                </div>
            </div>
        );
    }
}

function mapStateToProps({ users, authUser }){
        return {
            users,
            authUser : authUser ? authUser : null
        }
}

export default connect(mapStateToProps)(Login)