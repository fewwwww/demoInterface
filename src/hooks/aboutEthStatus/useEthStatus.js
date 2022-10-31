import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { useEffect } from "react";
import { actions as ethStatusActions } from "../../redux/modules/ethStatus";
import useMounted from "../useMounted";
import { FETCH_DATA} from "../../redux/middlewares/api";
import {getEthStatus} from "../../redux/modules/entities/ethStatus";

const useEthStatus = (action) => {
    const dispatch = useDispatch();
    const ethStatusDispatcher = bindActionCreators(
        ethStatusActions,
        dispatch
    );
    const mounted = useMounted();

    const fetchEthStatus = async () => {
        const response = await ethStatusDispatcher.loadEthStatus();

        if (response.status === 502) {
            // await subscribe();
        } else if (response.status !== 200) {
            await new Promise(resolve => setTimeout(resolve, 12000));
            await fetchEthStatus();
        } else {
            await new Promise(resolve => setTimeout(resolve, 12000));
            await fetchEthStatus();
        }
    }

    useEffect(() => {
        if (mounted.current && action === FETCH_DATA) {
            fetchEthStatus();
        }
    }, [mounted]);

    return {ethStatusData: useSelector((state) => getEthStatus(state))};
}

export default useEthStatus;