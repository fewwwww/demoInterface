import { combineReducers } from "redux";
import ethStatus from "./ethStatus";
import zkMessaging from "./zkMessaging";

const rootReducer = combineReducers({
    ethStatus,
    zkMessaging
});


export default rootReducer;