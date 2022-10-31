import { combineReducers } from "redux";
import app from "./app";
import entities from "./entities";
import ethStatus from "./ethStatus";



const rootReducer = combineReducers({
    app,
    entities,
    ethStatus
});


export default rootReducer;
