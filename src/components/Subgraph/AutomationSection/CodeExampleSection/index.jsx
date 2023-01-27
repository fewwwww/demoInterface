import * as React from "react";
import CodeMirror from "@uiw/react-codemirror";
import codemirrorTheme from "../../../../theme/codemirrorTheme";
import {javascript} from "@codemirror/lang-javascript";


const CodeExampleSection = () =>{

    return <>
        <CodeMirror
            value={`
########################################
# FileName: automation.ts              #
# Author: Hyper Oracle                 #
########################################

import { BigInt } from "as-bigint";
import { Event, GraphState, Bytes32, Bytes } from "../type";

var esig_sync = '0x1c411e9a96e071241c2f21f7726b17ae89e3cab4c78be50e062b03a9fffbbad1';
var esig_swap = '0xd78ad95fa46c994b6551d0da85fc275fe613ce37657fb8d5e3d130840159d822';

var trigger_price_threshold = BigInt.fromInt16(200);
export function handleEvent(event: Event, pre_state: GraphState = 0): GraphState{
    var next_state: GraphState;
    if (event.topics[0] == Bytes32.fromHex(esig_sync)){
        var reserve0 = Bytes.fromUint8Array(event.data.data.slice(0,32)).toBigInt()
        var reserve1 = Bytes.fromUint8Array(event.data.data.slice(32)).toBigInt()

        var price = reserve0.mul(1000).div(reserve1);
        var is_trigger;
        var payload;
        if (price > trigger_price_threshold.mul(1000)){
            is_trigger = 1;
            payload = price.toInt32();
        } else {
            is_trigger = 0;
            payload = 0;
        }
        next_state = changetype<GraphState>(is_trigger<<255 & payload);

    } else { // not possible
        next_state = pre_state
    }
    return next_state;
}
`}
            readOnly
            height="100%"
            theme={codemirrorTheme}
            extensions={[javascript({ jsx: true })]}
            basicSetup={{lineNumbers: false, highlightActiveLineGutter: false, foldGutter: false}}
        />
    </>
}

export default CodeExampleSection;