import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { useEffect } from "react";
import { actions as zkMessagingActions } from "../../redux/modules/zkMessaging";
import {getZkMessaging} from "../../redux/modules/entities/zkMessaging";

const useZkMessaging = () => {
    const dispatch = useDispatch();
    const zkMessagingDispatcher = bindActionCreators(
        zkMessagingActions,
        dispatch
    );

    return {zkMessagingFetcher: async () => await zkMessagingDispatcher.loadZkMessaging(),
    zkMessagingData: useSelector((state) => getZkMessaging(state))
    }
}

export default useZkMessaging;