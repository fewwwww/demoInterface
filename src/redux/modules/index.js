import { combineReducers } from "redux";
import app from "./app";
import entities from "./entities";
import ethStatus from "./ethStatus";
import zkMessaging from "./zkMessaging";
import playground from "./playground";


const rootReducer = combineReducers({
    app,
    entities,
    ethStatus,
    zkMessaging,
    playground
});


export default rootReducer;
