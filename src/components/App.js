import React, { Component } from "react";
import { handleInitialData } from "../actions/shared";
import { connect } from "react-redux";
import LoadingBar from "react-redux-loading";
import Login from "./Login";
import Dashboard from "./Dashboard";
import QuestionPage from "./QuestionPage";
import NewQuestion from "./NewQuestion";
import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom';
import Nav from "./Nav";
import Leaderboard from "./Leaderboard";



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
            {this.props.authUser === null
            ?
                // <Route to='/login' component={Login}>
                // <Redirect to='/login' component={Login} />
                // </Route>
                <Route to='/login' component={Login} />
                :
                <div className="container">
                    <Route path='/' exact component={Dashboard} />
                    <Route path='/questions/:id' component={QuestionPage}/>
                    <Route path='/add' component={NewQuestion}/>
                    <Route path='/leaderboard' component={Leaderboard}/>
                    <Route path='/login' component={Login} />

            </div>}
        </div>
        </Router>
    );
  }
}

function mapStateToProps( { authUser }){
    return {
        authUser
    }
}

export default connect(mapStateToProps)(App)
