import React, { Component } from "react";
import { handleInitialData } from "../actions/shared";
import { connect } from "react-redux";
import LoadingBar from "react-redux-loading";
import Login from "./Login";




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
            ? null : <div>APP

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
