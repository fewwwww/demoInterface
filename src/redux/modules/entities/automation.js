/***********************************************************************************************************************
 * 													SCHEMA 														   *
 * *********************************************************************************************************************/
import {types as ethStatusTypes} from "../ethStatus";
import {types as automationTypes} from "../automation";
const initialState = {price: [], blockNum: [], threshold: 0, subscription: []};

export const schema = {
    name: "automation",
    id: "id",
};

/***********************************************************************************************************************
 * 													REDUCERS 														   *
 * *********************************************************************************************************************/
let updatedThreshold = initialState.threshold;

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ethStatusTypes.FETCH_ETH_STATUS.success():
            if(initialState.price.length >= 10){
                initialState.price.shift();
                initialState.blockNum.shift();
            }
            initialState.price.push(action.response.graphdata["price_weth-uni"])
            initialState.blockNum.push(JSON.stringify(action.response.blocknum))
            return {...initialState, threshold: updatedThreshold};
        case automationTypes.FETCH_AUTOMATION.success():
            updatedThreshold =  action.response.threshold;
            return {...initialState, threshold: updatedThreshold}
        case automationTypes.AUTOMATION_SUBSCRIBER.success():
            console.log(action);
            initialState.subscription.unshift(action.payload)
            return {...initialState, threshold: updatedThreshold};
        default:
            return state;
    }
};

export default reducer;

/***********************************************************************************************************************
 * 													SELECT  														   *
 * *********************************************************************************************************************/
export const getAutomation = (state) => {
    return state.entities.automation;
};

export const getThreshold = (state) => {
    return state.entities.automation.threshold;
}

export const getAutomationSubscriptionData = (state) => {
    return state.entities.automation.subscription;
}