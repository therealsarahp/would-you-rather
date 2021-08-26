import React, { Component } from "react";
import {connect} from "react-redux";

class NewQuestion extends Component{
    state={
        optionOne: "",
        optionTwo: "",
    }

    handleChange=(e)=>{
        e.preventDefault()
    }

    handleSubmit=(e)=>{
        e.preventDefault()
    }

    render() {
        const { optionOne, optionTwo } = this.state

        return(
            <div>
                <h3 className="center">Ask A New Question</h3>
                <form className='new-question' onSubmit={this.handleSubmit}>
                    <label for="text1">Option One</label>
                    <textarea
                        placeholder="Would you..."
                        value={optionOne}
                        onChange={this.handleChange}
                        className='textarea'
                        maxLength={280}
                        id="text1"
                    />
                    <label for="text2">Option Two</label>
                    <textarea
                        placeholder="Would you... "
                        value={optionTwo}
                        onChange={this.handleChange}
                        className='textarea'
                        maxLength={280}
                        id='text2'
                    />
                    <button
                        className='btn'
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

}

export default connect(mapStateToProps)(NewQuestion)