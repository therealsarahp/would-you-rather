import React, { Component } from "react";
import { connect } from "react-redux";
import Question from "./Question";
import {handleAnswerQuestion} from "../actions/shared";
import { TiStarburst } from 'react-icons/all';


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
                <Question id={id}/>
                <div className="options">
                        <div className="optionOne">
                            {yourVote === 'optionOne' && <TiStarburst className="icon"/>}
                            <button className={this.hasAnswered() === true ? 'disabled' : 'qpb'}
                                value="optionOne"
                                onClick={this.handleClick}
                                disabled={this.hasAnswered() === true}>
                        {optionOne.text}
                            </button>
                    </div>
                        <div className="optionTwo">
                            {yourVote === 'optionTwo' && <TiStarburst className="icon"/>}
                            <button className={this.hasAnswered() === true ? 'disabled' : 'qpb'}
                                value="optionTwo"
                                onClick={this.handleClick}
                                disabled={this.hasAnswered() === true}
                            >{optionTwo.text}
                            </button>
                        </div>
                    </div>
                <div>

                {this.hasAnswered()=== true &&
                <div className="votesSection">
                    <div className="optionOne">
                        <div className="progressBar">
                            <span style={{ width: `${votes(optionOne)}%` }}>
                                {votes(optionOne)}%
                            </span>
                         </div>
                        <p>{optionOneVotes.length} Votes of {totalVotes}</p>
                    </div>
                    <div className="optionTwo">
                        <div className="progressBar">
                            <span style={{ width: `${votes(optionTwo)}%` }}>
                                {votes(optionTwo)}%
                            </span>
                        </div>
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