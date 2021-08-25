import React, { Component } from "react";
import { connect } from "react-redux";
import Question from "./Question";

class Dashboard extends Component{
    render() {
        const { questionIds, questions, users} = this.props;

        // const { id, author, timestamp, optionOne, optionTwo } = questions

        return(
            <div>
                <h3 className='center'>Dashboard</h3>
                <ul className='question-list'>
                    {questionIds.map((id)=> (
                                <li key={id}>
                                    <Question id={id}/>
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
        questionIds: Object.keys(questions)
            .sort((a,b)=> questions[b].timestamp - questions[a].timestamp)
    }
}

export default connect(mapStateToProps)(Dashboard);