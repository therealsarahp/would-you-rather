import React, { Component } from "react";
import { connect } from "react-redux";
import Question from "./Question";
import {handleAnswerQuestion} from "../actions/shared";

class QuestionPage extends Component{

    state= {
        answer: '',
    }

    handleClick=(e)=>{
        e.preventDefault();

        const { dispatch, question, authUser } = this.props

        // Promise.all(
        //     this.setState(()=>({
        //     answer: e.target.value,
        // }))).then(
        let answer = e.target.value
            dispatch(handleAnswerQuestion({
            id: question.id,
            authUser,
            answer,
        }))
            // ))


        //answering the quesiton needs to change values in option.votes and in users.answers

    }

    render() {
        const { id, question, authUser } = this.props
        return(
            <div className="question-page">
                Question Page
                <Question id={id}/>
                <button
                    value="optionOne"
                    onClick={this.handleClick}
                >{question.optionOne.text}</button>
                <button
                    value="optionTwo"
                    onClick={this.handleClick}
                >{question.optionTwo.text}</button>
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