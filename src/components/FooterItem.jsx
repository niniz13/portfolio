import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const FooterItem = ({ url, children }) => {
    const navigate = useNavigate();

    return (
        <Typography
            onClick={() => navigate(url)}
            sx={{
                cursor: 'pointer',
                fontFamily: 'Inter, sans-serif',
                fontSize: '14px',
                fontWeight: 600,
                letterSpacing: '-0.05em',
                color: '#4D4D4D'
            }}
        >
            {children}
        </Typography>
    );
};

export default FooterItem;
