import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import uniswap from "../../../mock/uniswap/data";
import LanguageIcon from '@mui/icons-material/Language';
import GitHubIcon from '@mui/icons-material/GitHub';
import Playground from "../Playground";
import ValidationSection from "../ValidationSection";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ py: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const data = uniswap();
const Overview = () =>{
    return (
        <>
            <Box sx={{display: "grid", rowGap: 2}}>
                <Box>
                    <Typography>A fully decentralized protocol for automated liquidity provision on Ethereum.
                    </Typography>
                </Box>
                <Box sx={{display: "flex", flexDirection: "column", alignContent: 'center', gap: 1 }}>
                    <Box sx={{display: 'inline-flex', gap: 1}}>
                        <LanguageIcon/>
                        <Typography>uniswap.org</Typography>
                    </Box>

                    <Box sx={{display: 'inline-flex', gap: 1}}>
                        <GitHubIcon/>
                        <Typography>Uniswap/uniswap-v2-subgraph</Typography>
                    </Box>

                </Box>
                <Box>
                    <Typography variant={"subtitle1"} color={"text.secondary"}>TARGET CONTRACT ADDRESS</Typography>
                    <Typography >0xd3d2e2692501a5c9ca623199d38826e513033a17</Typography>
                </Box>
                <Box>
                    <Typography variant={"subtitle1"} color={"text.secondary"}>ZK VERIFIER CONTRACT ADDRESS</Typography>
                    <Typography>0xA304A4DfFB62681d67EDECe178ee067658a412a6 (sepolia)</Typography>
                </Box>
            </Box>
        </>
    )
}

export default function TabSection() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', height: "auto" }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Overview" {...a11yProps(0)} />
                    <Tab label="Indexers" {...a11yProps(1)} />
                    <Tab label="ZK Graph" {...a11yProps(2)} />
                    <Tab label="Playground" {...a11yProps(3)} />
                    <Tab label="Validation" {...a11yProps(4)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <Overview/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                Indexers developing...
            </TabPanel>
            <TabPanel value={value} index={2}>
                ZK Graph developing...
            </TabPanel>
            <TabPanel value={value} index={3}>
                <Playground/>
            </TabPanel>
            <TabPanel value={value} index={4}>
                <ValidationSection/>
            </TabPanel>
        </Box>
    );
}