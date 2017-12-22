import React, { Component } from "react";
import { connect } from 'react-redux';
import { Navigation } from "../Navigation";
import { Route, withRouter } from 'react-router-dom';
import { StatisticPage } from "../StatisticPage.jsx";
import { HomePage } from "../HomePage.jsx";
import "./app.scss";

class App extends Component {
    render() {
        return (
            <div>
                <Navigation/>
                <Route path="/" exact component={HomePage}/>
                <Route path="/statistic" component={StatisticPage}/>
            </div>
        );
    }
}

function mapStateToProps(state){
    return state;
}

export  default  withRouter(connect(mapStateToProps)(App));