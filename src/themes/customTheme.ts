import { createTheme } from "@mui/material";
import customLightPalette from "./customLightPalette";
import customDarkPalette from "./customDarkPalette";

const customTheme = (prefersDarkMode?:boolean) =>{

    return createTheme({
        palette: prefersDarkMode ? customDarkPalette : customLightPalette,        
    })
}

export default customTheme