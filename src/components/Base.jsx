import { Box } from "@mui/material"
import Menu from "./Menu";
import Footer from "./Footer";


const Base = ({children}) => {
    return(
        <Box>
            <Menu />
            {children}
            <Footer />
        </Box>
    )
}

export default Base;