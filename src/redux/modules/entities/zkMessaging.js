/***********************************************************************************************************************
 * 													SCHEMA 														   *
 * *********************************************************************************************************************/
import zkMessaging, {types} from "../zkMessaging";

const initialState = {
    source: {
        ChainName: "Ethereum",
        Height: 0,
        SourceContract: "0x",
        price: 0
    },
    destination: {
        ChainName: "EVMOS",
        Height: 0,
        SourceContract: "0x",
        price: 0
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
            return {
                source: {
                    ...state.source,
                    price: action.response.toNumber(),
                    Height: action.params[0]
                },
                destination: {
                    ...state.destination,
                    price: action.response.toNumber(),
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
    return state.entities.ethStatus;
};
