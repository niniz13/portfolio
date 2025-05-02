import Base from "@/components/Base";
import Safari from "@/components/Safari";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";


const Home = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <Base>
            <Box
                sx={{
                    position: 'relative',
                    maxWidth: '100vw',
                    height: '40vw',
                    overflow: 'hidden',
                }}
            >
                <Box
                    sx={{
                        position: 'absolute',
                        left: '10%',
                        width: '60vw',
                        zIndex: 1,
                    }}
                >
                    <Safari imageUrl={"assets/home1.jpg"} title={"jeremygross.pictures"} />
                </Box>
                <Box
                    sx={{
                        position: 'absolute',
                        top: '20vw',
                        left: '60%',
                        width: '30vw',
                        zIndex: 2,
                    }}
                >
                    <Safari imageUrl={"assets/home2.jpg"} title={"jeremygross.pictures"} />

                </Box>
                <Box
                    sx={{
                        position: 'absolute',
                        top: '25vw',
                        left: '40%',
                        width: '25vw',
                        zIndex: 3,
                    }}
                >
                    <Safari imageUrl={"assets/home3.jpg"} title={"jeremygross.pictures"} />
                </Box>
            </Box>

            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '100px 0'
            }}>
                <Typography sx={{
                    width: isMobile ? '80vw' : '50vw',
                    textAlign: 'center',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '40px',
                    fontWeight: '800',
                    letterSpacing: '-5%',
                    lineHeight: '40px'
                }}>
                    Passionate photographer based in the south of France, I capture the intensity of sports and the
                    elegance of automobiles with an authentic and dynamic eye.
                </Typography>
            </Box>

            <Box sx={{
                backgroundColor: '#000',
                padding: '50px 0',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '20px'
            }}>
                <Typography
                    sx={{
                        width: '280px',
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '40px',
                        fontWeight: '800',
                        color: '#FFF',
                        letterSpacing: '-5%',
                        lineHeight: '40px'
                    }}>
                    Contact me for a photoshoot !
                </Typography>
                <ShimmerButton url={"/contact"}>Go to contact</ShimmerButton>
            </Box>
        </Base>
    )
}

export default Home;