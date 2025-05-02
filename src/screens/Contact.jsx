import Base from "@/components/Base";
import ContactForm from "@/components/ContactForm";
import SocialMediaIcon from "@/components/SocialMediaIcon";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

const Contact = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    const socialMedias = [
        {
            imgSrc: 'assets/icons/instagram.svg',
            url: 'https://www.instagram.com/grs__jeremy/',
        },
        {
            imgSrc: 'assets/icons/tiktok.svg',
            url: 'https://www.tiktok.com/@grossjeremy',
        },
        {
            imgSrc: 'assets/icons/linkedin.svg',
            url: 'https://www.linkedin.com/in/jérémy-gross-159a8622b/',
        },
        {
            imgSrc: 'assets/icons/youtube.svg',
            url: 'https://www.youtube.com/@NinizTVShort',
        },
        {
            imgSrc: 'assets/icons/spotify.svg',
            url: 'https://open.spotify.com/user/n75tdjv2gl43rcf49tcebm5rk',
        },
        {
            imgSrc: 'assets/icons/discord.svg',
            url: 'https://discord.com/niniz_',
        },
        {
            imgSrc: 'assets/icons/behance.svg',
            url: 'https://www.behance.net/jeremygross3',
        },
        {
            imgSrc: 'assets/icons/github.svg',
            url: 'https://github.com/niniz13',
        },
    ]

    return (
        <Base>
            <Box sx={{
                padding: isMobile ? '20px' : '50px 200px',
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                justifyContent: 'center',
                alignItems: 'center',
                gap: isMobile ? '50px' : '100px'
            }}>
                <Box sx={{
                    width: isMobile ? '90%': '50%'
                }}>
                    <ContactForm />
                </Box>
                <Box sx={{
                    width: isMobile ? '90%': '50%',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px'
                }}>
                    <Typography sx={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '20px',
                        fontWeight: '600',
                        letterSpacing: '-5%',
                        lineHeight: '24px'
                    }}>
                        You can get in touch using the form on this page, or feel free to reach out directly through one of
                        the social media platforms listed below. Whether you have a question, a project in mind, or just want
                        to connect — I'm always happy to chat. Looking forward to hearing from you!
                    </Typography>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        gap: '10px'
                    }}>
                        {socialMedias.map((item) => (
                            <SocialMediaIcon imgSrc={item.imgSrc} url={item.url}/>
                        ))}
                    </Box>
                </Box>
            </Box>
        </Base>
    )
}

export default Contact;