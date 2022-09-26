import * as React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import codemirrorTheme from "../../../../theme/codemirrorTheme";
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';

const InputSection = ({handleFetchBlockData}) => {
    const onChange = React.useCallback((value, viewUpdate) => {
        console.log('value:', value);
    }, []);

    return(
        <>
            <PlayCircleFilledWhiteIcon style={{margin: "5px 5px", cursor: "pointer"}} onClick={handleFetchBlockData}/>
            <CodeMirror
                value={`{          
    blocknum,
    blockhash,
    graphdata{
        price,
        contract,
        decimals,
    },
    zkproof,
}`}
                height="100%"
                // readOnly
                theme={codemirrorTheme}
                extensions={[javascript({ jsx: true })]}
                onChange={onChange}
                basicSetup={{lineNumbers: false, highlightActiveLineGutter: false, foldGutter: false}}

            />
        </>

    )
}


export  default InputSection;