import * as React from "react";
import CodeMirror from "@uiw/react-codemirror";
import {codemirrorTheme1} from "../../../../theme/codemirrorTheme";
import {javascript} from "@codemirror/lang-javascript";
import {useEffect, useState} from "react";
import Box from "@mui/material/Box";


const output = `
[+] blocknum: 15620267
[+] blockhash: 0x093244eb12f11671bf1a5e04d0c5e34eacf1213001bda85da2c94ab55cc8ac3a
[+] new state: 225446
[+] zkproof: 0x83b8ddba4ae8e89a22f4f742924ccf43a62b9da93e4d97a069d8628ba70fbb11
[+] price: 225.446,
[+] contract: 'UniswapV2(UNI-WETH)',
[+] decimals: 3
`;
const InstantBlockData = () =>{
    const [data, setData] = useState({
        blocknum: "",
        blockhash: "",
        zkproof: "",
        price: "",
        contract: "",
        decimals: "",
    });

    const subscribe = async () => {
        let response = await fetch("http://54.248.170.145/getcurrentprice");
        if (response.status === 502) {
            // await subscribe();
        } else if (response.status !== 200) {
            await new Promise(resolve => setTimeout(resolve, 12000));
            await subscribe();
        } else {
            let message = await response.json();
            console.log(message);
            setData({
                blocknum: message.blocknum,
                blockhash: message.blockhash,
                zkproof: message.zkproof,
                price: message.graphdata["price_weth-uni"],
                contract: message.graphdata.contract,
                decimals: message.graphdata.decimals,
            })
            await new Promise(resolve => setTimeout(resolve, 12000));
            await subscribe();
        }
    }

    const subscribeConnector = () =>{
        subscribe();
    }

    const onChange = React.useCallback((value, viewUpdate) => {
        console.log('value:', value);
    }, []);

    useEffect(()=>{
        subscribeConnector()
    }, [])

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

[+] blocknum: ${data.blocknum}
[+] blockhash: ${data.blockhash}
[+] zkproof: ${data.zkproof}
[+] price: ${data.price}
[+] decimals: ${data.decimals}
[+] contract: ${data.contract}
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