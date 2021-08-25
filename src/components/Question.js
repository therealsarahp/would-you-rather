import React, { Component } from "react";
import { connect } from "react-redux";
// import { formatQuestion } from "../utils/_DATA";
import { formatDate } from "../utils/_DATA";

class Question extends Component{
    render() {
        const { id, question, users} = this.props

        if(question === null){
            return <p>No Question To Show</p>
        }

        const { timestamp, author, optionOne, optionTwo } = question
        return(
            <div  className="question-list-item">
                {formatDate(timestamp)}
                <img
                    className='avatar'
                    src={users[author].avatarURL}
                    alt={`Avatar of ${author}`}
                    />
            <div className="question-details">
                <span>{users[author].name} Asks...</span>
                <h3> WOULD YOU RATHER...</h3>
               <p className="center">{optionOne.text} OR {optionTwo.text}</p>

                {/*//todo: add optional values and displays for "no-votes" vs. "votes";
                if(optionOne.votes.length > 0 && optionTwo.votes.length > 0){
                 etc..... */}
            </div>
            </div>
        )
    }
}

function mapStateToProps({ authedUser, users, questions }, { id }){
    const question = questions[id];

    return{
        users,
        authedUser,
        question : question ? question : null
            // ? formatQuestion(question)
            // : null
    }


}

export default connect(mapStateToProps)(Question)