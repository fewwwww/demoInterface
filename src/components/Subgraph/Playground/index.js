import InputSection from "./InputSection";
import Box from "@mui/material/Box";
import {Alert, Divider} from "@mui/material";
import OutputSection from "./OutputSection";
import SchemaSection from "./schemaSection";
import usePlayground from "../../../hooks/aboutPlayground/usePlayground";

const Playground = () => {

    const {pullData, playgroundDataGetter, updateData, offChainVerify, getIsVerifying, getPulledData} = usePlayground()

    const outputBorder = () => {
        if(playgroundDataGetter.verificationResult === true) return  "2px dashed #1b4813";
        else if(playgroundDataGetter.verificationResult === false) return "2px dashed #FFAEBC";
        else return "2px dashed transparent";
    }

    return <Box sx={{display: "flex", flexDirection: "row", justifyContent: 'space-between', height: "500px"}}>
            <Box style={{ width: "370px", overflow: "scroll"}}>
                <Alert icon={false} severity="success" style={{backgroundColor: "transparent"}}>
                    # define your data schema here
                </Alert>
                <InputSection pullData={pullData}/>
            </Box>
            <Divider orientation="vertical"/>

           <Box style={{
               border: outputBorder(),
               // background: "#1b4813",
               overflow: "scroll",
               width: "370px"}}>
               <Alert icon={false} severity="success" style={{backgroundColor: "transparent"}}>
                   # receive and validate your data on onchain verifier
               </Alert>
               {
                   getPulledData && <OutputSection getIsVerifying={getIsVerifying} offChainVerify={offChainVerify} updateData={updateData} playgroundDataGetter={playgroundDataGetter}/>

               }
           </Box>

            <Divider orientation="vertical"/>
            <Box style={{width: "370px",
                overflow: "scroll",
            }}>
                <Alert icon={false} severity="success" style={{backgroundColor: "transparent"}}>
                    # graph types
                </Alert>
                <SchemaSection/>
            </Box>
        </Box>
}

export default Playground;