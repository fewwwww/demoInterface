/***********************************************************************************************************************
 * 													CONSTANTS 														   *
 * *********************************************************************************************************************/
import {actionTypesConstructor, dispatchAction} from "../utils";
import { schema as ethStatusSchema} from "./entities/ethStatus";
import { FETCH_DATA, POST_DATA } from "../middlewares/api";
import {combineReducers} from "redux";
import url from "../../utils/url";

export const types = {
    FETCH_ETH_STATUS: actionTypesConstructor(
        "ETH_STATUS_REQUEST",
        "ETH_STATUS_SUCCESS",
        "ETH_STATUS_FAILURE"
    ),
}

/***********************************************************************************************************************
 * 													STATE   														   *
 * *********************************************************************************************************************/
const initialState = {
    isFetching: false,
}

/***********************************************************************************************************************
 * 													ACTIONS 														   *
 * *********************************************************************************************************************/
export const actions = {
    loadEthStatus: ()=>{
        return async (dispatch, getState) => {
            const endpoint = url.getEthStatus();
            return await dispatch(
                dispatchAction(
                    FETCH_DATA,
                    types.FETCH_ETH_STATUS.all(),
                    endpoint,
                    ethStatusSchema
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
        case types.FETCH_ETH_STATUS.request():
            return { ...state, isFetching: true };
        case types.FETCH_ETH_STATUS.success():
            return { ...state, isFetching: false };
        case types.FETCH_ETH_STATUS.failure():
            return { ...state, isFetching: false };
        default:
            return state;
    }
}

const reducer = combineReducers({data})
export default reducer;