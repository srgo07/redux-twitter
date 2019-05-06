import React from "react";
import { connect } from "react-redux";

const Timeline = (props) => (
    <div>
        <h2>Your Timeline:</h2>
        <ul>
            {Object.keys(props.tweets).map((key) => (
                <li key={key}>TWEET ID: {props.tweets[key].id}</li>
            ))}
        </ul>
    </div>
)

export default connect((state) => ({
    tweets: state.tweets
}))(Timeline)