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
    const {zkMessagingFetcher, zkMessagingData} = useZkMessaging();

    useEffect(()=>{
        zkMessagingFetcher();
    }, [ethStatusData])


    return(<>
        <Box>
            <Box >
                <Typography variant={"h3"}>
                    Source Blockchain
                </Typography>
                <Typography>Chain Name: {zkMessagingData.source.ChainName}</Typography>
                <Typography>Height: {zkMessagingData.source.Height}</Typography>
                <Typography>Source Contract: {zkMessagingData.source.SourceContract}</Typography>
                <Typography>Price on source chain: {zkMessagingData.source.Price} </Typography>
            </Box>
            <Divider sx={{marginTop:5, marginBottom: 5}}/>
            <Box>
                <Typography variant={"h3"}>
                    Destination Blockchain
                </Typography>
                <Typography>Chain Name: {zkMessagingData.destination.ChainName}</Typography>
                <Typography>Height: {zkMessagingData.destination.Height}</Typography>
                <Typography>Source Contract: {zkMessagingData.destination.SourceContract}</Typography>
                <Typography>Price on Destination chain: {zkMessagingData.destination.Price} </Typography>
            </Box>

        </Box>

    </>)

}

export default ZKMessagingSection;