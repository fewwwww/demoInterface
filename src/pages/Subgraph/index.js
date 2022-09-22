import Box from "@mui/material/Box";
import uniswap from "../../mock/uniswap/data";
import BasicSection from "../../components/Subgraph/BasicSection";
import TabSection from "../../components/Subgraph/TabSection";
const data = uniswap();



const Subgraph = () =>{
    return <>
        <Box sx={{my: 10,display:"grid", rowGap: 10}}>
            <Box>
                <BasicSection data={data}/>
            </Box>
            <Box>
                <TabSection/>
            </Box>

        </Box>
    </>
}


export default Subgraph;