import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {bindActionCreators} from "redux";
import {actions as automationActions, getIsSubscriptionOn, types} from "../../redux/modules/automation";
import useMounted from "../useMounted";
import {getAutomationSubscriptionData} from "../../redux/modules/entities/automation";

const useAutomationSubscriber = () =>{
    const dispatch = useDispatch();
    const automationDispatcher = bindActionCreators(
        automationActions,
        dispatch
    );

    const mounted = useMounted();
    const AutomationSubscriptionCanceller = async () => await automationDispatcher.cancelAutomationSubscription();
    const isSubscriptionOn =  useSelector((state) => getIsSubscriptionOn(state));

    useEffect(() => {
        const subscribeAutomation = async () => await automationDispatcher.subscribeAutomation();
        if(!isSubscriptionOn && mounted){
            subscribeAutomation()
        }
        // return () => AutomationSubscriptionCanceller()
    }, [])


    return {
        automationSubscriptionDataGetter: useSelector((state) =>getAutomationSubscriptionData(state)),
        AutomationSubscriptionCanceller
    }
}

export default useAutomationSubscriber;