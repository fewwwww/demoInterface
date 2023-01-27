import * as React from "react";
import Box from "@mui/material/Box";
import useAutomation from "../../../../hooks/aboutAutomation/useAutomation";
import {Line} from "react-chartjs-2";
import annotationPlugin from 'chartjs-plugin-annotation';
import {
    CategoryScale,
    Chart as ChartJS,
    LinearScale,
    LineElement,
    PointElement, Title,
    Tooltip,
} from 'chart.js';
import backgroundPlugin from "../../../../utils/chart/backgroundPlugin";
import {types} from "../../../../redux/modules/automation";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Title,
    annotationPlugin, backgroundPlugin
);


const AutomationChart = () =>{

    const {thresholdGetter, automationGetter} = useAutomation([types.FETCH_AUTOMATION.request()]);

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                ticks: {
                    display: false,
                    padding: 0,
                },
                grid: {
                    drawBorder: false,
                    display: false,
                },
            },
            y: {
                ticks: {
                    display: false,
                    beginAtZero: true,
                    padding: 0,
                },
                grid: {
                    drawBorder: false,
                    display: false,
                },
            }
        },
        layout: {
            padding: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            },
        },
        plugins: {
            annotation: {
                annotations: [{
                    id: "slo",
                    type: 'line',
                    mode: 'horizontal',
                    value: thresholdGetter,
                    scaleID: "y",
                    borderWidth: 2,
                    borderDash: [10, 5],
                    label: {
                        enabled: true,
                        content: `threshold: ${thresholdGetter}`,
                        position: 'start',
                    }
                }
                ]
            },
            background: {
                color: 'black'
            }
        },
    }

    return <>
            <Box sx={{display: 'flex', flexDirection: "row", alignItems: 'center',  gap: 1}} style={{height: "20px", width: "100%", backgroundColor: "#bdc3c7", border: "5px solid #bdc3c7",
                borderTopLeftRadius: "10px", borderTopRightRadius: "10px"}}>
                <Box style={{height: "10px", width: "10px", backgroundColor: "#f64f59", borderRadius: "50%"}}></Box>
                <Box style={{height: "10px", width: "10px", backgroundColor: "#FDFC47", borderRadius: "50%"}}></Box>
                <Box style={{height: "10px", width: "10px", backgroundColor: "#24FE41", borderRadius: "50%"}}></Box>
            </Box>
            <Line  data={{
                labels: automationGetter.blockNum,
                datasets: [
                    {
                        label: 'price',
                        data: automationGetter.price,
                        borderColor: '#88d109',
                    }
                ]
            }} options={options}/>
            <div  style={{ borderBottom: "2.5px solid #bdc3c7", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px"}}>
            </div>
    </>

}

export default AutomationChart;