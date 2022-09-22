import * as React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import codemirrorTheme from "../../../../theme/codemirrorTheme";

const InputSection = () => {
    const onChange = React.useCallback((value, viewUpdate) => {
        console.log('value:', value);
    }, []);
    return(
        <>
            <CodeMirror
                value={`{
  protocols(first: 5) {
    id
    inflation
    inflationChange
    maxEarningsClaimsRounds
  }
  transcoders(first: 5) {
    id
    activationRound
    deactivationRound
    lastActiveStakeUpdateRound
  }
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