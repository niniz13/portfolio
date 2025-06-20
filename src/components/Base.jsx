import { SpeedInsights } from "@vercel/speed-insights/react"
import { Box } from "@mui/material"
import Menu from "./Menu";
import Footer from "./Footer";


const Base = ({children}) => {
    return(
        <Box>
            <Menu />
            {children}
            <SpeedInsights />
            <Footer />
        </Box>
    )
}

export default Base;