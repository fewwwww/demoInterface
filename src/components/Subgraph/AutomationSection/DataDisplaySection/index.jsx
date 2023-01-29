import {Alert, Stack} from "@mui/material";
import useAutomationSubscriber from "../../../../hooks/aboutAutomation/useAutomationSubscriber";
import { useAutoAnimate } from '@formkit/auto-animate/react'

const DataDisplaySection = () =>{

    const [parent, enableAnimations] = useAutoAnimate()
    const {automationSubscriptionDataGetter} = useAutomationSubscriber();

    return <Stack spacing={2} sx={{ width: '100%' }} style={{height: "800px", overflow: "scroll"}} ref={parent}>
            {
                automationSubscriptionDataGetter.map((each, i)=> <Alert key={i} color={each.isTriggered? "":"info"} severity={each.isTriggered? "success" : "info"}>
                    blockNum: {each.event.blockNumber+" "}
                    payload: {each.payload.slice(0, 8)+"..."+each.payload.slice( -4)+" "}
                    blockHash: {each.event.blockHash.slice(0, 8)+"..."+each.event.blockHash.slice( -4)}
                </Alert>)
            }
        </Stack>
}

export default DataDisplaySection;