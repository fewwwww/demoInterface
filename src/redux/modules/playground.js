import {actionTypesConstructor, dispatchAction} from "../utils";
import url from "../../utils/url";
import {FETCH_DATA, VIEW_CONTRACT} from "../middlewares/api";
import {schema as ethStatusSchema} from "./entities/ethStatus";
import abi from "../../utils/zk/zkabi.json";
import {uint2hexbytes32} from "../../utils/priceToByte";
import {combineReducers} from "redux";

/***********************************************************************************************************************
 * 													CONSTANTS 														   *
 * *********************************************************************************************************************/
export const types = {
    OFF_CHAIN_VERIFY: actionTypesConstructor(
        "PLAYGROUND/OFF_CHAIN_VERIFY_REQUEST",
        "PLAYGROUND/OFF_CHAIN_VERIFY_SUCCESS",
        "PLAYGROUND/OFF_CHAIN_VERIFY_FAILURE"
    ),

    PULL_DATA: "PLAYGROUND/PULL_DATA",
    UPDATE_DATA: "PLAYGROUND/UPDATE_DATA"
}

/***********************************************************************************************************************
 * 													STATE   														   *
 * *********************************************************************************************************************/
const initialState = {
    isVerifying: false,
    pulledData: false,
    verificationResult: "UNSET"
}

/***********************************************************************************************************************
 * 													ACTIONS 														   *
 * *********************************************************************************************************************/
export const actions = {
    offChainVerify: ()=>{
        return async (dispatch, getState) => {
            const blockHash = await getState().entities.playground.blockHash;
            const blockNumber = await getState().entities.playground.blockNumber;
            const zkProof = await getState().entities.playground.zkProof;
            const zkgState = await getState().entities.playground.zkgState;
            const price = await getState().entities.playground.price * 1000;

            console.log(blockHash, zkgState, zkProof, uint2hexbytes32(price))
            if(uint2hexbytes32(price) !== zkgState) return await dispatch(
                {
                    type: types.OFF_CHAIN_VERIFY.failure(),
                    message: "Validation failed!",
                    error: "Validation failed!",
                }
            )
            return await dispatch(
                {
                    [VIEW_CONTRACT]: {
                        types: types.OFF_CHAIN_VERIFY.all(),
                        contractAddress: "0x0d430614C9dec499eD95080e036F16657973F4B7",
                        abi,
                        provider: "https://eth-sepolia.unifra.io/v1/d52e8bdf1dd14499ad09767522a6d43b",
                        funcName: "verify",
                        params: [blockNumber, blockHash, zkgState, zkProof]
                    },
                }
            )
        }
    },
    pullData: ()=>{
        return async (dispatch, getState) => {
            return await dispatch(
                {
                    type: types.PULL_DATA,
                    response: getState().entities.ethStatus
                }
            )
        }
    },
    updateData: (data)=>{
        return async (dispatch, getState) => {
            return await dispatch(
                {
                    type: types.UPDATE_DATA,
                    response: data
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
        case types.OFF_CHAIN_VERIFY.request():
            return {...state, isVerifying: true}
        case types.OFF_CHAIN_VERIFY.success():
            return {...state, isVerifying: false}
        case types.OFF_CHAIN_VERIFY.failure():
            return {...state, isVerifying: false}
        case types.PULL_DATA:
            return { ...state, pulledData: Date.now() };
        default:
            return state;
    }
}

const reducer = combineReducers({data})
export default reducer;

/***********************************************************************************************************************
 * 													SELECT  														   *
 * *********************************************************************************************************************/
export const getIsVerifying = (state) => {
    return state.playground.data.isVerifying;
};

export const getPulledData = (state) => {
    return state.playground.data.pulledData;
};
