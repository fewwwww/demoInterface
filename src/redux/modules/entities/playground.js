import {types} from "../playground";

/***********************************************************************************************************************
 * 													SCHEMA 														   *
 * *********************************************************************************************************************/

const initialState = {
    blockNumber: 0,
    blockHash: "0x",
    zkProof: "0x",
    price: 0,
    decimals: 3,
    zkgState: "0x",
    contract: "UniswapV2(UNI-WETH)",
    verificationResult: "UNSENT",
};

export const schema = {
    name: "playground",
    id: "id",
};

/***********************************************************************************************************************
 * 													REDUCERS 														   *
 * *********************************************************************************************************************/

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.PULL_DATA:
            return {
                ...state,
                blockNumber: action.response.blockNumber,
                blockHash: action.response.blockHash,
                zkProof: action.response.zkProof,
                price: action.response.price,
                decimals: action.response.decimals,
                zkgState: action.response.zkgState,
                contract:  action.response.contract,
                verificationResult: "UNSENT",
            };
        case types.UPDATE_DATA:
            return {
                ...state,
                blockNumber: action.response.blockNumber,
                blockHash: action.response.blockHash,
                zkProof: action.response.zkProof,
                price: action.response.price,
                decimals: action.response.decimals,
                zkgState: action.response.zkgState,
                contract:  action.response.contract,
                verificationResult: "UNSENT",
            };
        case types.OFF_CHAIN_VERIFY.request():
            return {
                ...state,
                verificationResult: "SENDING"
            }
        case types.OFF_CHAIN_VERIFY.success():
            return {
                ...state,
                verificationResult: true
            }
        case types.OFF_CHAIN_VERIFY.failure():
            return {
                ...state,
                verificationResult: false
            }
        default:
            return state;
    }
};

export default reducer;

/***********************************************************************************************************************
 * 													SELECT  														   *
 * *********************************************************************************************************************/
export const getPlaygroundData = (state) => {
    return state.entities.playground;
};
