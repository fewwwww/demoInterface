/***********************************************************************************************************************
 * 													SCHEMA 														   *
 * *********************************************************************************************************************/
import {types} from "../ethStatus";
const initialState = {price: [], blockNum: []};

export const schema = {
    name: "automation",
    id: "id",
};

/***********************************************************************************************************************
 * 													REDUCERS 														   *
 * *********************************************************************************************************************/

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_ETH_STATUS.success():
            if(initialState.price.length >= 10){
                initialState.price.shift();
                initialState.blockNum.shift();
            }
            initialState.price.push(action.response.graphdata["price_weth-uni"])
            initialState.blockNum.push(JSON.stringify(action.response.blocknum))
            return initialState;
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
