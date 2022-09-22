import * as React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import codemirrorTheme from "../../../../theme/codemirrorTheme";

const OutputSection = () => {
    const onChange = React.useCallback((value, viewUpdate) => {
        console.log('value:', value);
    }, []);
    return(
        <>
            <CodeMirror
                value={`{
  "data":{             
    "blocknum":15581543,
    "blockhash":"0xa54b8f306dbacef716be8a29adfdbf4c03446d002222f3f47326527acfda9dca",
    "graphdata":{
        "price":247.584,
        "contract":"UniswapV2(UNI-WETH)",
        "decimals":3
    },
    "zkproof":"demoproof"
  }            
}
`}
                height="100%"
                readOnly
                theme={codemirrorTheme}
                extensions={[javascript({ jsx: true })]}
                onChange={onChange}
                basicSetup={{lineNumbers: false, highlightActiveLineGutter: false, foldGutter: false}}

            />
        </>

    )
}


export  default OutputSection;