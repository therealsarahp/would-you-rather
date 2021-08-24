import React, { Component } from "react";
import { connect } from "react-redux";

class Dashboard extends Component{
    render() {
        const { questionIds, questions, users} = this.props;

        return(
            <div>
                <h3 className='center'>Dashboard</h3>
                <ul className='question-list'>
                    {questionIds.map((id)=> (
                        <li key={id} className="question-list-item">
                            <img
                                className='avatar'
                                src={users[questions[id].author].avatarURL}
                                alt={`Avatar of ${users[questions[id].author]}`}/>
                            {/*find a better way to access these bits of information*/}
                            Question Id: {id}
                        </li>
                        )
                    )}
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