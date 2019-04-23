import { LOAD_DATA } from "../actions/load";

export default function reduceApp(state = [], action) {
    switch (action.type) {
        case LOAD_DATA:
            return {
                dataLoaded: action.loaded
            };
    
        default:
            return state;
    }
}