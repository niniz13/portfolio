import React, { useState } from "react";
import {
    Box,
    Typography,
    IconButton,
    Drawer,
    useMediaQuery,
    useTheme
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "./MenuItem"; // Ton composant personnalisé

const Menu = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
    };

    const menuLinks = [
        { label: "HOME", url: "/" },
        { label: "PORTFOLIO", url: "/portfolio" },
        { label: "CONTACT", url: "/contact" },
    ];

    return (
        <Box sx={{
            padding: isMobile ? '20px' : '50px 200px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        }}>
            <Typography sx={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '30px',
                fontWeight: '800',
                letterSpacing: '-5%',
            }}>
                JEREMY GROSS
            </Typography>

            {isMobile ? (
                <>
                    <IconButton onClick={toggleDrawer(true)}>
                        <MenuIcon fontSize="large" />
                    </IconButton>
                    <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)} slotProps={{
                        backdrop: {
                            sx: {
                                zIndex: 900,
                            },
                        },
                        paper: {
                            sx: {
                                zIndex: 1000,
                            },
                        },
                    }}>
                        <Box sx={{ width: '70vw', padding: '20px', gap: '20px', display: 'flex', flexDirection: 'column' }} onClick={toggleDrawer(false)}>
                            {menuLinks.map((item) => (
                                <Box>
                                    <MenuItem url={item.url}>
                                        {item.label}
                                    </MenuItem>
                                </Box>
                            ))}
                        </Box>
                    </Drawer>
                </>
            ) : (
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '100px',
                }}>
                    {menuLinks.map((item) => (
                        <MenuItem url={item.url}>
                            {item.label}
                        </MenuItem>
                    ))}
                </Box>
            )}
        </Box>
    );
};

export default Menu;
