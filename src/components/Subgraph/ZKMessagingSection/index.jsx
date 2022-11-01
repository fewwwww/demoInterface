import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {Button, Divider} from "@mui/material";
import abi from "../../../utils/zk/zkabi.json";
import {ethers} from "ethers";
import useZkMessaging from "../../../hooks/aboutZkMessaging/useZkMessaging";
import useEthStatus from "../../../hooks/aboutEthStatus/useEthStatus";
import {useEffect} from "react";

const ZKMessagingSection = () =>{
    const {ethStatusData} = useEthStatus();
    const {zkMessagingFetcher } = useZkMessaging();

    useEffect(()=>{
        zkMessagingFetcher();
    }, [ethStatusData])


    return(<>
        <Box>
            <Box sx={{marginBottom: 10}}>
                <Typography variant={"h3"}>
                    Source Blockchain
                </Typography>
                <Typography>Chain Name: Ethereum</Typography>
                <Typography>Height: 123456</Typography>
                <Typography>Source Contract: </Typography>
                <Typography>Price on source chain:  </Typography>
            </Box>
            <Divider/>
            <Box>
                <Typography variant={"h3"}>
                    Destination Blockchain
                </Typography>
                <Typography>Chain Name: EVMOS</Typography>
                <Typography>Height: 43112</Typography>
                <Typography>Source Contract: </Typography>
                <Typography>Price on source chain:  </Typography>
            </Box>

        </Box>

    </>)

}

export default ZKMessagingSection;