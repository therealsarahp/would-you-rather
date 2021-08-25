import React, { Component } from "react";
import { connect } from "react-redux";
// import { formatQuestion } from "../utils/_DATA";

class Question extends Component{
    render() {
        const { id, question, users} = this.props
        const { timestamp, author, optionOne, optionTwo } = question
        console.log(question)
        return(
            <div  className="question-list-item">
                <img
                    className='avatar'
                    src={users[author].avatarURL}
                    alt={`Avatar of ${author}`}/>
            <div className="question-details">
                <h3> WOULD YOU RATHER...</h3>
               <p> Question Text: {optionOne.text} OR {optionTwo.text}</p>
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
        question : question
            // ? formatQuestion(question)
            // : null
    }


}

export default connect(mapStateToProps)(Question)