import {Alert, Stack} from "@mui/material";
import {useState} from "react";


const data_m = [
    {blockNum: 16220645, isTriggered: false, payload: 234, hash: "0xabcd….dcba"},
    {blockNum: 16220646, isTriggered: false, payload: 232, hash: "0xabcd….dcba"},
    {blockNum: 16220647, isTriggered: true, payload: 234, hash: "0xabcd….dcba"},
    {blockNum: 16220648, isTriggered: true, payload: 256, hash: "0xabcd….dcba"},
    {blockNum: 16220649, isTriggered: false, payload: 255, hash: "0xabcd….dcba"},
    {blockNum: 16220650, isTriggered: true, payload: 222, hash: "0xabcd….dcba"},
    {blockNum: 16220645, isTriggered: false, payload: 234, hash: "0xabcd….dcba"},
    {blockNum: 16220646, isTriggered: false, payload: 232, hash: "0xabcd….dcba"},
    {blockNum: 16220647, isTriggered: true, payload: 234, hash: "0xabcd….dcba"},
    {blockNum: 16220648, isTriggered: true, payload: 256, hash: "0xabcd….dcba"},
    {blockNum: 16220649, isTriggered: false, payload: 255, hash: "0xabcd….dcba"},
    {blockNum: 16220650, isTriggered: true, payload: 222, hash: "0xabcd….dcba"},
    {blockNum: 16220650, isTriggered: true, payload: 222, hash: "0xabcd….dcba"}
]


const DataDisplaySection = () =>{

    const [data, setData] = useState([...data_m])


    return <>

        <Stack spacing={2} sx={{ width: '100%' }}>
            {
                data.map((each, i)=> <Alert key={i} color={each.isTriggered? "":"info"} severity={each.isTriggered? "success" : "info"}>
                    blockNum: {each.blockNum}  payload: {each.payload} hash: {each.hash}</Alert>)
            }
        </Stack>
    </>
}

export default DataDisplaySection;