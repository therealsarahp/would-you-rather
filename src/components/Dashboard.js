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
        const { questionIds, questions, users} = this.props;

        let showingQuestions = this.state.value === "noVotes" ?
            Object.values(questions).filter((question) => question.optionOne.votes.length === 0 && question.optionTwo.votes.length === 0)
            : Object.values(questions).filter((question)=>question.optionOne.votes.length >0 || question.optionTwo.votes.length >0)

        showingQuestions.length > 0
        ? showingQuestions.sort((a,b)=> b.timestamp - a.timestamp)
        : showingQuestions = [0]

        return(
            <div>
                <h3 className='center'>Dashboard</h3>
                <button
                    value="votes"
                    onClick={this.handleClick}>Answered</button>
                <button
                    value="noVotes"
                    onClick={this.handleClick}
                 >Unanswered</button>

                <ul className='question-list'>
                    {showingQuestions.map((question, index)=>(
                        <li key={index}>
                            <Question id={question.id}/>
                        </li>
                    ))}


                    {/*{questionIds.map((id)=> (*/}
                    {/*            <li key={id}>*/}
                    {/*                <Question id={id}/>*/}
                    {/*            </li>*/}
                    {/*))}*/}
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
        questionIds: Object.keys(questions)
            .sort((a,b)=> questions[b].timestamp - questions[a].timestamp)

    }
}

export default connect(mapStateToProps)(Dashboard);