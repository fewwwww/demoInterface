import * as React from "react";
import CodeMirror from "@uiw/react-codemirror";
import {codemirrorTheme1} from "../../../../theme/codemirrorTheme";
import {javascript} from "@codemirror/lang-javascript";
import {useEffect, useState} from "react";


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
        let response = await fetch("http://100.89.211.30:3000/getcurrentprice");
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
            <CodeMirror
                value={`
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
            />
        </>
    )
}

export default InstantBlockData;