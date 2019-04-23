import { TWEETS_LOADED } from "../actions/tweets";

export default function reduceTweets(state = [], action) {
    switch (action.type) {
        case TWEETS_LOADED:
            return {
                ...state,
                ...action.tweets
            };
        default:
            return state;
    }
}