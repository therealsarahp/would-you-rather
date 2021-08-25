import React, { Component } from "react";
import { handleInitialData } from "../actions/shared";
import { connect } from "react-redux";
import LoadingBar from "react-redux-loading";
// import Login from "./Login";
import Dashboard from "./Dashboard";
import QuestionPage from "./QuestionPage";



class App extends Component {

    componentDidMount() {
        const { dispatch } = this.props

        dispatch(handleInitialData())
    }

    render() {
    return (
        <div className="App">
            <LoadingBar />
            {this.props.loading === true
            ? null : <div className="container">
                    <QuestionPage match={{params: {id:"vthrdm985a262al8qx3do"}}}/>

            </div>}
        </div>
    );
  }
}

function mapStateToProps( { authUser }){
    return {
        loading: authUser === null
    }
}

export default connect(mapStateToProps)(App)
