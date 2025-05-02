import { Box, Typography } from "@mui/material"
import FooterItem from "./FooterItem";
import FooterSocialMedia from "./FooterSocialMedia";

const Footer = () => {
    return (
        <Box sx={{
            padding: '50px 200px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '20px'
        }}>
            <Typography sx={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '16px',
                fontWeight: 600,
                letterSpacing: '-0.05em',
            }}>
                © Jérémy Gross
            </Typography>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '200px'
            }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '20px'
                }}>
                    <FooterItem url={'/'}>
                        Home
                    </FooterItem>
                    <FooterItem url={'/portfolio'}>
                        Portfolio
                    </FooterItem>
                    <FooterItem url={'/contact'}>
                        Contact
                    </FooterItem>
                </Box>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '20px'
                }}>
                    <FooterSocialMedia url={'https://www.instagram.com/grs__jeremy/'}>
                        Instagram
                    </FooterSocialMedia>
                    <FooterSocialMedia url={'https://www.tiktok.com/@grossjeremy'}>
                        TikTok
                    </FooterSocialMedia>
                    <FooterSocialMedia url={'https://www.linkedin.com/in/jérémy-gross-159a8622b/'}>
                        LinkedIn
                    </FooterSocialMedia>
                </Box>
            </Box>
        </Box>
    )
}

export default Footer;