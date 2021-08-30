import React, { Component } from "react";
import { connect } from "react-redux";
import Question from "./Question";


class Dashboard extends Component{
    state={
        value: 'noVotes',

    }

    handleClick=(e)=>{
        e.preventDefault();

        this.setState(()=>({
            value: e.target.value
        }))
    }


    render() {
        const { questions, users, authUser } = this.props;

        let showingQuestions = Object.keys(questions)
        let answeredQs = Object.keys(users[authUser].answers)

        this.state.value === "noVotes" ?
            answeredQs.forEach((answer)=>
                    showingQuestions.splice(showingQuestions.indexOf(answer), 1))
            : showingQuestions = showingQuestions.filter((questionId)=>
                answeredQs.includes(questionId))

        showingQuestions.length > 0
        ? showingQuestions.sort((a,b)=> questions[b].timestamp - questions[a].timestamp)
        : showingQuestions = [0]



        return(
            <div className="dash">
                <h3 className='center'>Dashboard</h3>
                <div className="center" >
                    <button
                    value="votes"
                    onClick={this.handleClick}
                    className='dash-btn left'
                    disabled = {this.state.value === "votes"}
                >Answered</button>
                    <button
                        value="noVotes"
                        onClick={this.handleClick}
                        className='dash-btn right'
                        disabled={this.state.value === "noVotes"}
                    >Unanswered</button>
                </div>
                <br/>
                <ul className='question-list'>
                    {showingQuestions.map((question, index)=>(
                        <li key={index}>
                            <Question id={question}/>
                        </li>
                    ))}

                </ul>

            </div>
        )
    }
}



function mapStateToProps({ questions, authUser, users }){
    return{
        authUser,
        questions,
        users,


    }
}

export default connect(mapStateToProps)(Dashboard);