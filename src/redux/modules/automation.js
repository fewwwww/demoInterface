import {actionTypesConstructor, dispatchAction} from "../utils";
import url from "../../utils/url";
import {FETCH_DATA} from "../middlewares/api";
import {schema as automationSchema} from "./entities/automation";
import {combineReducers} from "redux";
const abi = require("../../utils/zk/autoabi.json");
const ethers = require('ethers');

let provider = new ethers.providers.JsonRpcProvider("https://rpc.sepolia.org");
let contractAddress = "0x368fe264cCc5aD07903794179C614DE73EC20811";
let contract = new ethers.Contract(contractAddress, abi, provider);

/***********************************************************************************************************************
 * 													CONSTANTS 														   *
 * *********************************************************************************************************************/

export const types = {
    FETCH_AUTOMATION: actionTypesConstructor(
        "AUTOMATION_REQUEST",
        "AUTOMATION_SUCCESS",
        "AUTOMATION_FAILURE"
    ),
    AUTOMATION_SUBSCRIBER: actionTypesConstructor(
        "AUTOMATION_SUBSCRIBER_REQUEST",
        "AUTOMATION_SUBSCRIBER_SUCCESS",
        "AUTOMATION_SUBSCRIBER_FAILURE"
    ),
    AUTOMATION_SUBSCRIBER_CANCELLED: "AUTOMATION_SUBSCRIBER_CANCELLED"
}

/***********************************************************************************************************************
 * 													STATE   														   *
 * *********************************************************************************************************************/
const initialState = {
    isThresholdFetching: false,
    isSubscriptionOn: false
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
    },
    subscribeAutomation: ()=>{
        return async (dispatch, getState) => {
            await contract.on("Auto", (srcBlockNum, target, payload, isTriggered, event) => {
               return dispatch(
                   {
                       type: types.AUTOMATION_SUBSCRIBER.success(),
                       payload: {srcBlockNum, target, payload, isTriggered, event}
                   }
               )
            });
        }
    },
    cancelAutomationSubscription: () => {
        return async (dispatch, getState) => {
            contract.removeAllListeners("Auto");
            return await dispatch(
                {
                    type: types.AUTOMATION_SUBSCRIBER_CANCELLED,
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
        case types.FETCH_AUTOMATION.request():
            return { ...state, isThresholdFetching: true };
        case types.FETCH_AUTOMATION.success():
            return { ...state, isThresholdFetching: false };
        case types.FETCH_AUTOMATION.failure():
            return { ...state, isThresholdFetching: false };
        case types.AUTOMATION_SUBSCRIBER.success():
            return {...state, isSubscriptionOn: true};
        case types.AUTOMATION_SUBSCRIBER_CANCELLED:
            return {...state, isSubscriptionOn: false};
        default:
            return state;
    }
}

const reducer = combineReducers({data})
export default reducer;

/***********************************************************************************************************************
 * 													SELECT  														   *
 * *********************************************************************************************************************/

export const getIsSubscriptionOn = (state) => {
    return state.automation.data.isSubscriptionOn;
}