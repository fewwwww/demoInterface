import InputSection from "./InputSection";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {Divider, Grid} from "@mui/material";
import OutputSection from "./OutputSection";
import SchemaSection from "./schemaSection";


const Playground = () => {
    return <Box sx={{display: "flex", flexDirection: "row", justifyContent: 'space-between', height: "500px"}}>
            <Box style={{ width: "370px", overflow: "scroll"}}>
                <InputSection/>
            </Box>
            <Divider orientation="vertical"/>
            <Box style={{
                border: "2px dashed #1b4813",
                // background: "#1b4813",
                overflow: "scroll",
                width: "370px"}}>
                <OutputSection/>
            </Box>
            <Divider orientation="vertical"/>
            <Box style={{width: "370px",
                overflow: "scroll",
            }}>
                <SchemaSection/>
            </Box>
        </Box>
}

export default Playground;