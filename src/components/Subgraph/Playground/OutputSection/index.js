import * as React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import codemirrorTheme from "../../../../theme/codemirrorTheme";
import GavelIcon from '@mui/icons-material/Gavel';
import {useState} from "react";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Box from "@mui/material/Box";
import {LinearProgress} from "@mui/material";
import {schemaValues, validateInput} from "../../../../utils/schemaValidate";
import Typography from "@mui/material/Typography";

const OutputSection = ({playgroundDataGetter,getIsVerifying, verifiedResult, updateData, offChainVerify}) => {
    const [verifyWarning, setVerifyWarning] = useState(null);

    const onChange = React.useCallback((value) => {
        setVerifyWarning(null)
        setVerifyWarning(validateInput(value));
        if(!verifyWarning){
            updateData(schemaValues(value))
        }

    }, []);

    const VerifyIcon = () => {
        if(Object.keys(playgroundDataGetter).length <= 0) return <></>
        else if(getIsVerifying) return  <Box sx={{ width: '100%' }}>
            <LinearProgress />
        </Box>
        else if(playgroundDataGetter.verificationResult === true) return <CheckCircleIcon style={{margin: "5px 5px"}}/>
        else if(verifyWarning) return<Box sx={{display: "flex", flexDirection: "row", backgroundColor: "#9b2226"}}>
            <Box>
                <GavelIcon style={{margin: "5px 5px"}}/>
            </Box>
            <Box>
                <Typography style={{margin: "5px 5px"}} variant={"h6"}>{verifyWarning ?? ""}</Typography>
            </Box>
        </Box>

        else return <GavelIcon style={{margin: "5px 5px", cursor: "pointer"}} onClick={(e)=> offChainVerify(e)}/>
    }

    return(
        <>

            <VerifyIcon/>
            <CodeMirror
                value={Object.keys(playgroundDataGetter).length > 0? `{
  "data":{             
    "blocknum":${playgroundDataGetter.blockNumber},
    "blockhash":"${playgroundDataGetter.blockHash}",
    "graphdata":{
        "price":${playgroundDataGetter.price},
        "contract":"${playgroundDataGetter.contract}",
        "decimals":${playgroundDataGetter.decimals}
    },
    "zkproof":"${playgroundDataGetter.zkProof}"
  }            
}
`:""}
                height="100%"
                theme={codemirrorTheme}
                extensions={[javascript({ jsx: true })]}
                onChange={onChange}
                basicSetup={{lineNumbers: false, highlightActiveLineGutter: false, foldGutter: false}}
            />
        </>
    )
}


export  default OutputSection;