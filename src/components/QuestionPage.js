import React, { Component } from "react";
import { connect } from "react-redux";
import Question from "./Question";

class QuestionPage extends Component{

    handleClick=(e)=>{
        e.preventDefault();

        const { dispatch, question, authUser } = this.props


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