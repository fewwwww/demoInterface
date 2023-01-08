import {actionTypesConstructor, dispatchAction} from "../utils";
import url from "../../utils/url";
import {FETCH_DATA} from "../middlewares/api";
import {schema as automationSchema} from "./entities/automation";
import {combineReducers} from "redux";

/***********************************************************************************************************************
 * 													CONSTANTS 														   *
 * *********************************************************************************************************************/

export const types = {
    FETCH_AUTOMATION: actionTypesConstructor(
        "AUTOMATION_REQUEST",
        "AUTOMATION_SUCCESS",
        "AUTOMATION_FAILURE"
    ),
}

/***********************************************************************************************************************
 * 													STATE   														   *
 * *********************************************************************************************************************/
const initialState = {
    isThresholdFetching: false,
}

/***********************************************************************************************************************
 * 													ACTIONS 														   *
 * *********************************************************************************************************************/

export const actions = {
    loadThreshold: ()=>{
        return async (dispatch, getState) => {
            const endpoint = url.getThreshold();
            return await dispatch(
                dispatchAction(
                    FETCH_DATA,
                    types.FETCH_AUTOMATION.all(),
                    endpoint,
                    automationSchema
                )
            )
        }
    }
}

/***********************************************************************************************************************
 * 													REDUCERS 														   *
 * *********************************************************************************************************************/

const data = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_AUTOMATION.request():
            return { ...state, isThresholdFetching: true };
        case types.FETCH_AUTOMATION.success():
            return { ...state, isThresholdFetching: false };
        case types.FETCH_AUTOMATION.failure():
            return { ...state, isThresholdFetching: false };
        default:
            return state;
    }
}

const reducer = combineReducers({data})
export default reducer;