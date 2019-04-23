import React, { Component } from 'react'
import { connect } from "react-redux";
import { handleLoadData } from '../actions/load';

class App extends Component {
    componentDidMount() {
        const {dispatch} = this.props
        handleLoadData
        dispatch(handleLoadData())
            .then(() => {
                console.log(this.props);
            }) 
    }
    render() {
        return (
            <div>
                Start Code
            </div>
        )
    }
}

export default connect((state) => ({
    ...state
}))(App)