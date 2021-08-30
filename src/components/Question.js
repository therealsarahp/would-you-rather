import React, { Component } from "react";
import { connect } from "react-redux";
// import { formatQuestion } from "../utils/_DATA";
import {Link} from "react-router-dom";

class Question extends Component{
    render() {
        const { id, question, users} = this.props

        if(question === null){
            return <p>No Questions To Show</p>
        }

        const { author, optionOne, optionTwo } = question
        return(
            <Link to={`/questions/${id}`}  className="question-list-item">

                <img
                    className='avatar'
                    src={users[author].avatarURL}
                    alt={`Avatar of ${author}`}
                    />
            <div className="question-details">
                <span>{users[author].name} Asks...</span>
                <h3> WOULD YOU RATHER...</h3>
                <div className="question-text">
                    <p className="left">{optionOne.text}</p>
                    <span><h3 className="center">OR</h3></span>
                    <p className="right">{optionTwo.text}</p>
                </div>
            </div>
            </Link>
        )
    }
}

function mapStateToProps({ authUser, users, questions }, { id }){
    const question = questions[id];

    return{
        users,
        authUser,
        question : question ? question : null
            // ? formatQuestion(question)
            // : null
    }


}

export default connect(mapStateToProps)(Question)