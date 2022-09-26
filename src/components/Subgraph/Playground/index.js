import InputSection from "./InputSection";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {Divider, Grid} from "@mui/material";
import OutputSection from "./OutputSection";
import SchemaSection from "./schemaSection";
import axios from "axios";
import {useState} from "react";

const Playground = () => {

    const [output, setOutput] = useState({});
    const [verifiedResult, setVerifiedResult] = useState({status: "UNSENT"})

    const handleFetchBlockData = () =>{
            setVerifiedResult({status: "UNSENT"});
            axios.get('http://100.112.62.89:3000/getcurrentprice')
            .then(function (response) {
                if(response.status === 200){
                    const data = {
                        data: {
                            blockhash: response.data.blockhash,
                            blocknum: response.data.blocknum,
                            zkproof: response.data.zkproof,
                            graphdata: {
                                contract: response.data.graphdata.contract,
                                decimals: response.data.graphdata.decimals,
                                priceWethUni: response.data.graphdata["price_weth-uni"],
                            }
                        }
                    }
                    setOutput(data);
                }
                console.log(response)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

    const outputBorder = () => {
        console.log(verifiedResult.status);
        if(verifiedResult.status === true) return  "2px dashed #1b4813";
        else if(verifiedResult.status === false) return "2px dashed #FFAEBC";
        else return "2px dashed transparent";
    }

    return <Box sx={{display: "flex", flexDirection: "row", justifyContent: 'space-between', height: "500px"}}>
            <Box style={{ width: "370px", overflow: "scroll"}}>
                <InputSection handleFetchBlockData={handleFetchBlockData}/>
            </Box>
            <Divider orientation="vertical"/>
            <Box style={{
                border: outputBorder(),
                // background: "#1b4813",
                overflow: "scroll",
                width: "370px"}}>
                <OutputSection output={output} verifiedResult={verifiedResult} setVerifiedResult={(result)=>setVerifiedResult(result)}/>
            </Box>
            <Divider orientation="vertical"/>
            <Box style={{width: "370px",
                overflow: "scroll",
            }}>
                <SchemaSection/>
            </Box>
        </Box>
}

export default Playground;