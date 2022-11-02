/***********************************************************************************************************************
 * 													SCHEMA 														   *
 * *********************************************************************************************************************/
import zkMessaging, {types} from "../zkMessaging";

const initialState = {
    source: {
        ChainName: "Ethereum",
        Height: 0,
        SourceContract: "0xd3d2e2692501a5c9ca623199d38826e513033a17 (UNI-V2(UNI-WETH))",
        Price: 0
    },
    destination: {
        ChainName: "EVMOS",
        Height: 0,
        SourceContract: "0xb189Ff0279835DC0ce7b9FC450889369C4760fce",
        Price: 0
    }
};

export const schema = {
    name: "zkMessaging",
    id: "id",
};

/***********************************************************************************************************************
 * 													REDUCERS 														   *
 * *********************************************************************************************************************/

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_ZK_MESSAGING.success():
            console.log(action.response, action.response.toNumber());
            return {
                source: {
                    ...state.source,
                    Price: action.response.toNumber()/1000,
                    Height: action.params[0]
                },
                destination: {
                    ...state.destination,
                    Price: action.response.toNumber()/1000,
                    Height: action.params[0]
                }
            }
        default:
            return state;
    }
};

export default reducer;

/***********************************************************************************************************************
 * 													SELECT  														   *
 * *********************************************************************************************************************/
export const getZkMessaging = (state) => {
    return state.entities.zkMessaging;
};
