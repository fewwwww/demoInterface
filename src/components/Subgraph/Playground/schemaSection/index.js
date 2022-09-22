import * as React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import codemirrorTheme from "../../../../theme/codemirrorTheme";

const SchemeSection = () => {
    const onChange = React.useCallback((value, viewUpdate) => {
        console.log('value:', value);
    }, []);
    return(
        <>
            <CodeMirror
                value={`
blocknum: BigInt!
blockhash: String!
graphdata: [Graphdata]!
zkproof: String!
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


export  default SchemeSection;