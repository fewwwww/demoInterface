import {Alert, Stack} from "@mui/material";
import {useEffect, useState} from "react";


const data_m = [
    {blockNum: 16220645, isTriggered: false, payload: 234},
    {blockNum: 16220646, isTriggered: false, payload: 232},
    {blockNum: 16220647, isTriggered: true, payload: 234},
    {blockNum: 16220648, isTriggered: true, payload: 256},
    {blockNum: 16220649, isTriggered: false, payload: 255},
    {blockNum: 16220650, isTriggered: true, payload: 222},
    {blockNum: 16220645, isTriggered: false, payload: 234},
    {blockNum: 16220646, isTriggered: false, payload: 232},
    {blockNum: 16220647, isTriggered: true, payload: 234},
    {blockNum: 16220648, isTriggered: true, payload: 256},
    {blockNum: 16220649, isTriggered: false, payload: 255},
    {blockNum: 16220650, isTriggered: true, payload: 222},
    {blockNum: 16220650, isTriggered: true, payload: 222}
]


const DataDisplaySection = () =>{

    const [data, setData] = useState([...data_m])


    return <>

        <Stack spacing={2} sx={{ width: '100%' }}>
            {
                data.map((each, i)=> <Alert key={i} color={each.isTriggered? "":"primary"} severity={each.isTriggered? "error" : "success"}>
                    blockNum: {each.blockNum}  payload: {each.payload} </Alert>)
            }
        </Stack>
    </>
}

export default DataDisplaySection;