import React, { Component } from "react";
import {connect} from "react-redux";
import { GiLaurelsTrophy } from "react-icons/gi"

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
                        {index === 0 && <GiLaurelsTrophy style={{ color: "#C9B037" , fontSize: "45px" }} />}
                        {index === 1 && <GiLaurelsTrophy style={{ color: "#B4B4B4", fontSize: "35px" }} />}
                        {index === 2 && <GiLaurelsTrophy style={{ color: "#6A3805", fontSize: "25px" }} />}
                        <img
                            className='avatar'
                            src={user.avatarURL}
                            alt={`Avatar of ${user.name}`}
                        />
                        <div className="leaders-details">
                            <p className='center'>{user.name}</p>
                            <p>Questions Asked: {user.questions.length}</p>
                            <p>Questions Answered: {Object.keys(user.answers).length}</p>

                            <div>
                                <p className="score"><span>SCORE: {user.questions.length + Object.keys(user.answers).length}</span></p>
                            </div>
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