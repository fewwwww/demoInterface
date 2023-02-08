import Box from "@mui/material/Box";
import CodeExampleSection from "./CodeExampleSection";
import DataDisplaySection from "./DataDisplaySection";
import {Divider} from "@mui/material";

const AutomationSection = () =>{

    return <Box sx={{display: "flex", flexDirection: "row", justifyContent: 'space-between', height: "auto"}}>
        <Box style={{width: "50%"}}>
            <CodeExampleSection/>
        </Box>

        <Divider orientation="vertical" />

        <Box>
            <DataDisplaySection/>
        </Box>

    </Box>
}

export default AutomationSection;
