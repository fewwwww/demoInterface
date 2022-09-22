import NavBar from "../components/NavBar/NavBar";
import {Paper} from "@mui/material";

const MainLayout = ({children})=>{
    return <Paper sx={{height: '100vh', width: '100%'}} square elevation={0} style={{backgroundImage: "linear-gradient(to top, #0D0854 55%, #7FCCF7 100%)", }}>
        <NavBar>
            {children}
        </NavBar>
    </Paper>
}

export default MainLayout;