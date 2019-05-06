import React, { Component } from 'react'
import { connect } from "react-redux";
import { handleLoadData } from '../actions/load';
import Timeline from "./timeline";
class App extends Component {
    componentDidMount() {
        const {dispatch} = this.props
        handleLoadData
        dispatch(handleLoadData()) 
    }
    render() {
        return (
            <div>
                <Timeline/>
            </div>
        )
    }
}

// export default connect((state) => ({
//     ...state
// }))(App)
export default connect()(App)