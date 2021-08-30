import React, { Component } from "react";
import {connect} from "react-redux";
import {handleAddQuestion} from "../actions/shared";
import {Redirect} from "react-router-dom";

class NewQuestion extends Component{
    state={
        optionOne: "",
        optionTwo: "",
        toPage: false,
    }

    handleChange=(e)=>{
        e.preventDefault()
        const option = e.target.name


        this.setState(()=>({
                [option]: e.target.value
            })
        )
    }

    handleSubmit=(e)=>{
        e.preventDefault()

        const { optionOne, optionTwo } = this.state
        const { authUser, dispatch } = this.props

        dispatch(handleAddQuestion({
            optionOne, optionTwo, authUser
        }))

        this.setState(()=> ({
            optionOne: '',
            optionTwo: '',
            toPage: true,
        }))
    }

    render() {
        const { optionOne, optionTwo, toPage } = this.state

        if(toPage === true) {
            return <Redirect to='/'/>
        }

        return(
            <div className="new-question-page">
                <h3 className="center">Ask A New Question</h3>
                <h3 className="center">Would You Rather...</h3>
                <form className='new-question' onSubmit={this.handleSubmit}>
                   <div className="optionOneText">
                        <label htmlFor="text1">Option One</label>
                        <textarea
                            placeholder="Would you..."
                            value={optionOne}
                            onChange={this.handleChange}
                            maxLength={280}
                            id="text1"
                            name="optionOne"
                        />
                    </div>
                    <div className="optionTwoText">
                        <label htmlFor="text2">Option Two</label>
                        <textarea
                            placeholder="Would you... "
                            value={optionTwo}
                            onChange={this.handleChange}
                            maxLength={280}
                            id='text2'
                            name="optionTwo"
                        />
                    </div>
                    <button
                        onSubmit={this.handleSubmit}
                        className='center'
                        type='submit'
                        disabled={optionOne === '' && optionTwo === ''}>
                        SUBMIT
                    </button>
                </form>
            </div>
        )
    }
}

function mapStateToProps({authUser}){
    return{
        authUser
    }
}

export default connect(mapStateToProps)(NewQuestion)