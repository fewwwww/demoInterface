import {Grid, Paper, styled} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InstantBlockData from "./InstantBlockData";
import AutomationChart from "./AutomationChart";
import * as React from "react";


const BasicSection = ({data}) =>{

    return(
        <>
            <Grid item container direction={"col"} spacing={2}>
                <Grid md={2} lg={2} item>
                    <Box sx={{height: 160, weight: 160}}>
                        <img style={{height: "100%", weight: "100%"}} src={data.basic.logo} alt={"logo"}/>
                    </Box>
                </Grid>
                <Grid container direction={"row"} item md={6} lg={6} >
                    <Grid item>
                        <Typography color={"text.secondary"}>0xf87a—e0549a</Typography>
                    </Grid>
                    <Grid item container direction={"col"} spacing={5}>
                        <Grid item>
                                <Typography variant={"h4"}>
                                    Uniswap V2
                                </Typography>
                        </Grid>
                        <Grid item>
                            <Typography  color={"text.secondary"}>v0.0.2</Typography>
                        </Grid>
                    </Grid>
                    <Grid item container direction={"col"} spacing={5}>
                        <Grid item>
                                <Typography variant={"h7"} color={"text.secondary"}>INDEXED NETWORK</Typography>
                                <Typography>Sepolia Testnet</Typography>
                        </Grid>
                        <Grid item>
                                <Typography variant={"h7"}  color={"text.secondary"}>TARGET CONTRACT ADDRESS</Typography>
                                <Typography>0xd3d2e2-33a17</Typography>
                        </Grid>
                        <Grid item>
                                <Typography variant={"h7"}  color={"text.secondary"}>ZK VERIFIER CONTRACT ADDRESS</Typography>
                                <Typography>0xe7651c-67807</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid md={4} lg={4} item>
                    <Box sx={{width: "100%", height: 220}}>
                        {/*<InstantBlockData/>*/}
                        <AutomationChart/>
                    </Box>
                </Grid>
            </Grid>

        </>
    )
}

export default BasicSection;