import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { useEffect } from "react";
import { actions as zkMessagingActions } from "../../redux/modules/zkMessaging";
import useMounted from "../useMounted";
import useEthStatus from "../aboutEthStatus/useEthStatus";

const useZkMessaging = () => {
    const dispatch = useDispatch();
    const zkMessagingDispatcher = bindActionCreators(
        zkMessagingActions,
        dispatch
    );

    return {zkMessagingFetcher: async () => await zkMessagingDispatcher.loadZkMessaging()}
}

export default useZkMessaging;