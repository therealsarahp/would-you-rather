import React, { Component } from "react";
import { connect } from "react-redux";
import Question from "./Question";
import {handleAnswerQuestion} from "../actions/shared";


class QuestionPage extends Component{

    handleClick=(e)=>{
        e.preventDefault();

        const { dispatch, question, authUser } = this.props

        let answer = e.target.value

            dispatch(handleAnswerQuestion({
            id: question.id,
            authUser,
            answer,
        }))

        this.hasAnswered();

    }

    hasAnswered=()=> {

        const {users, authUser, question} = this.props
        let hasAnswer;

        if (Object.keys(users[authUser].answers).includes(question.id)) {
            hasAnswer = true
            return hasAnswer
        } else {
            hasAnswer = false
            return hasAnswer
        }
    }

    render() {
        const { id, question, authUser, users } = this.props
        const { optionOne, optionTwo } = question

        const optionOneVotes = optionOne.votes;
        const optionTwoVotes = optionTwo.votes;

        const totalVotes = optionOneVotes.length + optionTwoVotes.length;

        function votes(option){
            return Math.round(option.votes.length / totalVotes * 100)
        }

        const yourVote = users[authUser].answers[id];
        console.log(yourVote)


        return(
            <div className="question-page">
                <div>
                Question Page
                <Question id={id}/>
                <button className={this.hasAnswered() === true ? 'disabled' : 'qpb'}
                    value="optionOne"
                    onClick={this.handleClick}
                    disabled={this.hasAnswered() === true}
                >{optionOne.text}</button>
                <button className={this.hasAnswered() === true ? 'disabled' : 'qpb'}
                    value="optionTwo"
                    onClick={this.handleClick}
                    disabled={this.hasAnswered() === true}
                >{optionTwo.text}</button>
                </div>
                <div>
                {this.hasAnswered()=== true &&
                <div className="votesSection">
                    <div className="progressBar">
                        <span style={{ width: `${votes(optionOne)}%` }}>
                            {votes(optionOne)}%
                        </span>
                        <p>{optionOneVotes.length} Votes of {totalVotes}</p>
                     </div>
                    <div className="progressBar">
                        <span style={{ width: `${votes(optionTwo)}%` }}>
                            {votes(optionTwo)}%
                        </span>
                        <p>{optionTwoVotes.length} Votes of {totalVotes}</p>
                    </div>
                </div>
                }
                </div>
            </div>

        )
    }
}

function mapStateToProps({ authUser, users, questions }, props){
    const { id } = props.match.params
    const question = questions[id];

    return{
        users,
        authUser,
        id,
        question
        // question : question ? question : null
        // ? formatQuestion(question)
        // : null
    }


}

export default connect(mapStateToProps)(QuestionPage)