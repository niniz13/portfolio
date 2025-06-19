import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const MenuItem = ({ url, children }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        if (/^https?:\/\//i.test(url)) {
            window.open(url, "_blank");
        } else {
            navigate(url);
        }
    };

    return (
        <Typography
            onClick={handleClick}
            sx={{
                cursor: 'pointer',
                position: 'relative',
                display: 'inline-block',
                fontFamily: 'Inter, sans-serif',
                fontSize: '20px',
                fontWeight: 600,
                letterSpacing: '-0.05em',
                '&::after': {
                    content: '""',
                    position: 'absolute',
                    left: 0,
                    bottom: 0,
                    width: '0%',
                    height: '2px',
                    backgroundColor: 'currentColor',
                    transition: 'width 0.3s ease-in-out',
                },
                '&:hover::after': {
                    width: '100%',
                },
            }}
        >
            {children}
        </Typography>
    );
};

export default MenuItem;
