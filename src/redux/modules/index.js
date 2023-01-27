import { combineReducers } from "redux";
import app from "./app";
import entities from "./entities";
import ethStatus from "./ethStatus";
import zkMessaging from "./zkMessaging";
import playground from "./playground";
import automation from "./automation"


const rootReducer = combineReducers({
    app,
    entities,
    ethStatus,
    zkMessaging,
    playground,
    automation
});


export default rootReducer;
