import {useDispatch, useSelector} from "react-redux";
import {bindActionCreators} from "redux";
import {actions as playgroundActions, getIsVerifying, getPulledData} from "../../redux/modules/playground";
import {getPlaygroundData} from "../../redux/modules/entities/playground";



const usePlayground = () => {
    const dispatch = useDispatch();
    const playgroundDispatcher = bindActionCreators(
        playgroundActions,
        dispatch
    );

    return {
        getPulledData: useSelector((state) => getPulledData(state)),
        getIsVerifying: useSelector((state) => getIsVerifying(state)),
        offChainVerify: async()=>await playgroundDispatcher.offChainVerify(),
        pullData: async()=> await playgroundDispatcher.pullData(),
        playgroundDataGetter: useSelector((state) => getPlaygroundData(state)),
        updateData: async(data)=>await playgroundDispatcher.updateData(data)
    }
}

export default usePlayground;