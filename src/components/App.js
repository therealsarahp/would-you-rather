import React, { Component } from "react";
import { handleInitialData } from "../actions/shared";
import { connect } from "react-redux";
import LoadingBar from "react-redux-loading";




class App extends Component {

    componentDidMount() {
        const { dispatch } = this.props

        dispatch(handleInitialData())
    }

    render() {
    console.log(this.props)
    return (
        <div className="App">
            <LoadingBar />
            {this.props.loading === true
            ? null : <div>APP</div>}
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
