import NavBar from "./components/NavBar/NavBar";
import {ThemeProvider} from "@mui/material";
import {createCustomTheme} from "./theme";
import { THEMES } from "./theme/constants";
import Box from "@mui/material/Box";
import MainLayout from "./layout";
import Subgraph from "./pages/Subgraph";
const theme = createCustomTheme(
    {
        direction: "ltr",
        responsiveFontSizes: true,
        roundedCorners: false,
        theme: THEMES.DARK,
    }
)

function App() {
  return (
    <div className="App">
        <ThemeProvider theme={theme}>
            <MainLayout>
                <Subgraph />
            </MainLayout>
        </ThemeProvider>
    </div>
  );
}

export default App;
