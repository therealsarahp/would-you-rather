import React, { Component } from "react";
import {connect} from "react-redux";

class Leaderboard extends Component{
    render() {
        const { users } = this.props

        const usersArr = Object.values(users);

        usersArr.sort((a,b)=>
            (b.questions.length + Object.keys(b.answers).length) - (a.questions.length + Object.keys(a.answers).length))

        console.log(usersArr)
        return(
            <div className="leaderboard">
               <h3 className="center">Leaderboard</h3>
                <ul>
                {usersArr.map((user, index)=>(
                    <li key={index} className="leaders">
                        <img
                            className='avatar'
                            src={user.avatarURL}
                            alt={`Avatar of ${user.name}`}
                        />
                        <div className="leaders-details">
                            <p className='center'>{user.name}</p>
                            <p>Questions Asked: {user.questions.length}</p>
                            <p>Questions Answered: {Object.keys(user.answers).length}</p>
                        </div>
                    </li>
                ))}
                    </ul>
                </div>
        )
    }
}

function mapStateToProps({ users, authUser }){
    return{
        users, authUser
    }

}

export default connect(mapStateToProps)(Leaderboard)