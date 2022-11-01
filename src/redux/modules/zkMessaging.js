/***********************************************************************************************************************
 * 													CONSTANTS 														   *
 * *********************************************************************************************************************/
import {actionTypesConstructor, dispatchAction} from "../utils";
import { schema as ethStatusSchema} from "./entities/ethStatus";
import {FETCH_DATA, POST_DATA, VIEW_CONTRACT} from "../middlewares/api";
import {combineReducers} from "redux";
import url from "../../utils/url";
import abi from "../../utils/zk/zkabi.json";

export const types = {
    FETCH_ZK_MESSAGING: actionTypesConstructor(
        "ZK_MESSAGING_REQUEST",
        "ZK_MESSAGING_SUCCESS",
        "ZK_MESSAGING_FAILURE"
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
    loadZkMessaging: ()=>{
        return async (dispatch, getState) => {
            const newestBlock = getState().entities.ethStatus.blockNumber;
            console.log("NEWEST BLOCK", newestBlock)
            return await dispatch(
                {
                    [VIEW_CONTRACT]: {
                        types: types.FETCH_ZK_MESSAGING.all(),
                        contractAddress: "0xb189Ff0279835DC0ce7b9FC450889369C4760fce",
                        abi,
                        provider: "https://cronos-testnet-3.crypto.org:8545",
                        funcName: "get_price_by_block",
                        params: [newestBlock]
                    },
                }
            )
        }
    }
}

/***********************************************************************************************************************
 * 													REDUCERS 														   *
 * *********************************************************************************************************************/
const data = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_ZK_MESSAGING.request():
            return { ...state, isFetching: true };
        case types.FETCH_ZK_MESSAGING.success():
            return { ...state, isFetching: false };
        case types.FETCH_ZK_MESSAGING.failure():
            return { ...state, isFetching: false };
        default:
            return state;
    }
}

const reducer = combineReducers({data})
export default reducer;