import * as React from "react";
import Box from "@mui/material/Box";
import CodeMirror from "@uiw/react-codemirror";
import {codemirrorTheme1} from "../../../../theme/codemirrorTheme";
import {javascript} from "@codemirror/lang-javascript";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ReferenceLine,
    ResponsiveContainer,
} from 'recharts';

const data = [
    {
        name: '16220644',
        price: 226.729,
        blockNum: 16220644
    },
    {
        name: '16220645',
        price: 227,
    },
    {
        name: '16220646',
        price: 226.2,
    },
    {
        name: '16220647',
        price: 225,
    },
    {
        name: '16220648',
        price: 225.89,
    },
    {
        name: '16220649',
        price: 225.729,
    },
    {
        name: '16220650',
        price: 227.45,
    },
    {
        name: '16220647',
        price: 225,
    },
    {
        name: '16220648',
        price: 225.89,
    },
    {
        name: '16220644',
        price: 226.729,
    },
];

const AutomationChart = () =>{

    return <>
        <>
            <Box sx={{display: 'flex', flexDirection: "row", alignItems: 'center',  gap: 1}} style={{height: "20px", width: "100%", backgroundColor: "#bdc3c7", border: "5px solid #bdc3c7",
                borderTopLeftRadius: "10px", borderTopRightRadius: "10px"}}>
                <Box style={{height: "10px", width: "10px", backgroundColor: "#f64f59", borderRadius: "50%"}}></Box>
                <Box style={{height: "10px", width: "10px", backgroundColor: "#FDFC47", borderRadius: "50%"}}></Box>
                <Box style={{height: "10px", width: "10px", backgroundColor: "#24FE41", borderRadius: "50%"}}></Box>
            </Box>
            <ResponsiveContainer width="100%" height="100%" >
                <LineChart
                    data={data}
                    padding={{
                        top: 20,
                        right: 5,
                        left: 5,
                        bottom: 20,
                    }}
                >
                    <XAxis hide dataKey="name" />
                    <YAxis hide dataKey="price" domain={[223,228]}/>

                    <Tooltip/>
                    <ReferenceLine y={226} label="ThreadHold" stroke="red" />
                    <Line type="monotone" dataKey="price" stroke="#24FE41" />
                </LineChart>
            </ResponsiveContainer>
            <div  style={{ borderBottom: "2.5px solid #bdc3c7", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px"}}>
            </div>
        </>
    </>

}

export default AutomationChart;