import React, { Component } from "react";
import { connect} from "react-redux";
import {handleRemoveAuthUser} from "../actions/authUser";

class Logout extends Component{

    handleLogout=(e)=>{
        e.preventDefault();
        const { dispatch } = this.props

        dispatch(handleRemoveAuthUser())
    }

    render() {
        if(this.props.authUser){
            return(
                <div>
                    You're Logged In {this.props.authUser}
                    <form
                        onSubmit={this.handleLogout}>
                        <button>LOGOUT</button>
                    </form>
                </div>
            )
        }
    }

}

function mapStateToProps({ authUser }){
    return{
        authUser : authUser ? authUser : null
    }
}

export default connect(mapStateToProps)(Logout)