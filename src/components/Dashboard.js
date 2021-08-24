import React, { Component } from "react";
import { connect } from "react-redux";

class Dashboard extends Component{
    render() {
        return(
            <div>
                <h3 className='center'>Dashboard</h3>
                <ul>
                    {this.props.questionIds.map((id)=> (
                        <li key={id}>
                            Question Id: {id}
                        </li>
                        )
                    )}
                </ul>

            </div>
        )
    }
}

function mapStateToProps({ questions }){
    return{
        questionIds: Object.keys(questions)
            .sort((a,b)=> questions[b].timestamp - questions[a].timestamp)
    }
}

export default connect(mapStateToProps)(Dashboard);