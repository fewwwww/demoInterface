/***********************************************************************************************************************
 * 													SCHEMA 														   *
 * *********************************************************************************************************************/
import createReducer from "../../../utils/createReducer";
import {types} from "../ethStatus";

const initialState = {
  blockNumber: 0,
  blockHash: "0x",
  zkProof: "0x",
  price: 0,
  decimals: 3,
  contract: "UniswapV2(UNI-WETH)"
};

export const schema = {
  name: "ethStatus",
  id: "id",
};

/***********************************************************************************************************************
 * 													REDUCERS 														   *
 * *********************************************************************************************************************/

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_ETH_STATUS.success():
      return {
        ...state,
        blockNumber: action.response.blocknum,
        blockHash: action.response.blockhash,
        zkProof: action.response.zkproof,
        price: action.response.graphdata["price_weth-uni"],
        decimals: action.response.graphdata.decimals,
        contract:  action.response.graphdata.contract,
      };
    default:
      return state;
  }
};

export default reducer;

/***********************************************************************************************************************
 * 													SELECT  														   *
 * *********************************************************************************************************************/
export const getEthStatus = (state) => {
  return state.entities.ethStatus;
};
