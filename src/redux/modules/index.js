import { combineReducers } from "redux";
import app from "./app";
import entities from "./entities";
import ethStatus from "./ethStatus";
import zkMessaging from "./zkMessaging";


const rootReducer = combineReducers({
    app,
    entities,
    ethStatus,
    zkMessaging
});


export default rootReducer;
