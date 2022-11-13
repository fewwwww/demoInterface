import { combineReducers } from "redux";
import ethStatus from "./ethStatus";
import zkMessaging from "./zkMessaging";
import playground from "./playground";

const rootReducer = combineReducers({
    ethStatus,
    zkMessaging,
    playground
});


export default rootReducer;