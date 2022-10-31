import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {Button, Divider} from "@mui/material";
import abi from "../../../utils/zk/zkabi.json";
import {ethers} from "ethers";

const DEPLOYED_CONTRACT_ADDRESS = "0xb189Ff0279835DC0ce7b9FC450889369C4760fce";

const ZKMessagingSection = () =>{
    const contractConnector = () =>{
        let provider = ethers.getDefaultProvider("https://cronos-testnet-3.crypto.org:8545");
        return new ethers.Contract(DEPLOYED_CONTRACT_ADDRESS, abi, provider);
    }

    const handleClick = async () =>{
        const connector = contractConnector();
        const result = await connector.get_price_by_block(15837070);
        console.log(result);
    }


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
            <Divider/>
            <Button onClick={handleClick}>Info</Button>
        </Box>

    </>)

}

export default ZKMessagingSection;