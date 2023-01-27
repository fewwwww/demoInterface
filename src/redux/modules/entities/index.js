import { combineReducers } from "redux";
import ethStatus from "./ethStatus";
import zkMessaging from "./zkMessaging";
import playground from "./playground";
import automation from "./automation";

const rootReducer = combineReducers({
    ethStatus,
    zkMessaging,
    playground,
    automation
});


export default rootReducer;