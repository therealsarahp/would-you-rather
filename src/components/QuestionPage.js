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

    hasAnswered=()=>{

        const { users, authUser, question } = this.props
        let hasAnswer;

        if(Object.keys(users[authUser].answers).includes(question.id)){
            hasAnswer = true
            return hasAnswer
        }
        else{
            hasAnswer = false
            return hasAnswer
        }
        return hasAnswer
        }

    render() {
        const { id, question, authUser } = this.props
        return(
            <div className="question-page">
                Question Page
                <Question id={id}/>
                <button className={this.hasAnswered() === true ? 'disabled' : 'qpb'}
                    value="optionOne"
                    onClick={this.handleClick}
                    disabled={this.hasAnswered() === true}
                >{question.optionOne.text}</button>
                <button className={this.hasAnswered() === true ? 'disabled' : 'qpb'}
                    value="optionTwo"
                    onClick={this.handleClick}
                    disabled={this.hasAnswered() === true}
                >{question.optionTwo.text}</button>
                {this.hasAnswered()=== true &&
                <div>
                this will be aprogres bar type thing
                </div>
                }
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