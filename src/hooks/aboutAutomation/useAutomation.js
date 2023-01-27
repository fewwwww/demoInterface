import {useDispatch, useSelector} from "react-redux";
import {getAutomation, getThreshold} from "../../redux/modules/entities/automation";
import {bindActionCreators} from "redux";
import {actions as automationActions, types} from "../../redux/modules/automation";
import useMounted from "../useMounted";
import {useEffect} from "react";

const useAutomation = (action) => {
    const dispatch = useDispatch();
    const automationDispatcher = bindActionCreators(
        automationActions,
        dispatch
    );
    const mounted = useMounted();

    const fetchThreshold = async () => await automationDispatcher.loadThreshold();

    useEffect(() => {
        if (mounted.current && action) {
            if(action.includes(types.FETCH_AUTOMATION.request())) fetchThreshold();
        }
    }, [])

    return {
        automationGetter: useSelector((state) => getAutomation(state)),
        thresholdGetter: useSelector((state) => getThreshold(state)),
    }
}

export default useAutomation;