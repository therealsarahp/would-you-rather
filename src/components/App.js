import React, { Component, Fragment } from "react";
import { handleInitialData } from "../actions/shared";
import { connect } from "react-redux";
import LoadingBar from "react-redux-loading";
// import Login from "./Login";
import Dashboard from "./Dashboard";
import QuestionPage from "./QuestionPage";
import NewQuestion from "./NewQuestion";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from "./Nav";



class App extends Component {

    componentDidMount() {
        const { dispatch } = this.props

        dispatch(handleInitialData())
    }

    render() {
    return (
        <Router>
        <div className="App">
            <LoadingBar />
                <Nav />
            {this.props.loading === true
            ? null :
                <div className="container">
                    <Route path='/' exact component={Dashboard} />
                    <Route path='/questions/:id' component={QuestionPage}/>
                    <Route path='/add' component={NewQuestion}/>
                    {/*<Route path='/leaderboard' component={Leaderboard}/>*/}

            </div>}
        </div>
        </Router>
    );
  }
}

function mapStateToProps( { authUser }){
    return {
        loading: authUser === null
    }
}

export default connect(mapStateToProps)(App)
