import {ThemeProvider} from "@mui/material";
import {createCustomTheme} from "./theme";
import { THEMES } from "./theme/constants";
import MainLayout from "./layout";
import Subgraph from "./pages/Subgraph";
import useEthStatus from "./hooks/aboutEthStatus/useEthStatus";
import {FETCH_DATA} from "./redux/middlewares/api";

const theme = createCustomTheme(
    {
        direction: "ltr",
        responsiveFontSizes: true,
        roundedCorners: false,
        theme: THEMES.DARK,
    }
)

function App() {

  useEthStatus(FETCH_DATA);

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
