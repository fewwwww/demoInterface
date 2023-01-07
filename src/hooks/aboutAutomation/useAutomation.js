import {useSelector} from "react-redux";
import {getAutomation} from "../../redux/modules/entities/automation";

const useAutomation = () => {

    return {
        automationGetter: useSelector((state) => getAutomation(state)),
    }
}

export default useAutomation;