import * as React from "react";
import CodeMirror from "@uiw/react-codemirror";
import {codemirrorTheme1} from "../../../../theme/codemirrorTheme";
import {javascript} from "@codemirror/lang-javascript";
import {useEffect, useState} from "react";
import Box from "@mui/material/Box";
import useRegularPoll from "../../../../hooks/subscriber/regularPoll";
import useEthStatus from "../../../../hooks/aboutEthStatus/useEthStatus";
import {FETCH_DATA} from "../../../../redux/middlewares/api";
import AutomationChart from "../AutomationChart";

const InstantBlockData = () =>{

    const {ethStatusData} = useEthStatus();

    const onChange = React.useCallback((value, viewUpdate) => {
        // console.log('value:', value);
    }, []);

    return(
        <>
            <Box sx={{display: 'flex', flexDirection: "row", alignItems: 'center',  gap: 1}} style={{height: "20px", width: "100%", backgroundColor: "#bdc3c7", border: "5px solid #bdc3c7",
            borderTopLeftRadius: "10px", borderTopRightRadius: "10px"}}>
                <Box style={{height: "10px", width: "10px", backgroundColor: "#f64f59", borderRadius: "50%"}}></Box>
                <Box style={{height: "10px", width: "10px", backgroundColor: "#FDFC47", borderRadius: "50%"}}></Box>
                <Box style={{height: "10px", width: "10px", backgroundColor: "#24FE41", borderRadius: "50%"}}></Box>
            </Box>
            <CodeMirror
                value={`
-------- Real time ETH status --------

[+] Block Number: ${ethStatusData.blockNumber}
[+] Block Hash: ${ethStatusData.blockHash}
[+] zkProof: ${ethStatusData.zkProof}
[+] ETH Price in USDC: ${ethStatusData.price}
[+] Decimals: ${ethStatusData.decimals}
[+] Contract: ${ethStatusData.contract}
`}
                height="100%"
                readOnly
                theme={codemirrorTheme1}
                extensions={[javascript({ jsx: true })]}
                onChange={onChange}
                basicSetup={{lineNumbers: false, highlightActiveLineGutter: false, foldGutter: false}}
                style={{borderBottom: "2.5px solid #bdc3c7", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px"}}
            />
        </>
    )
}

export default InstantBlockData;