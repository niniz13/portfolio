import Base from "@/components/Base";
import HomeProject from "@/components/HomeProject";
import Safari from "@/components/Safari";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { BlurFade } from "@/components/magicui/blur-fade";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";


const Home = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    const homeProjects = [
        { 
            imgUrl: "assets/img/homeProject1.jpg", 
            title: "Kargarden Museum Porsche", 
            description: "Kargarden Museum Porsche is a premium automotive exhibition held at the Jardin d'Albertras " +
            "in Bouc-Bel-Air, showcasing a stunning selection of iconic Porsche models. The event brings together " +
            "enthusiasts, collectors, and curious visitors to celebrate the heritage, design, and innovation of the " +
            "legendary German brand." 
        },
        { 
            imgUrl: "assets/img/homeProject2.jpg", 
            title: "Top Marques", 
            description: "Top Marques Monaco is one of the world’s most prestigious supercar shows, held in the heart " +
            "of Monte Carlo. The event features an exclusive display of high-end vehicles, including hypercars, luxury " +
            "sports cars, and cutting-edge automotive innovations — all set against the glamorous backdrop of the " +
            "Principality of Monaco." 
        },
        { 
            imgUrl: "assets/img/homeProject3.jpg", 
            title: "GT World Challenge EU", 
            description: "The GT World Challenge Europe at Circuit Paul Ricard is a major event in international GT " +
            "racing, bringing together top manufacturers, elite teams, and world-class drivers. Set on the iconic French " +
            "track in Le Castellet, the race delivers intense action, high-speed battles, and a showcase of some of the " +
            "most powerful GT3 cars on the planet." 
        },
        { 
            imgUrl: "assets/img/homeProject4.jpg", 
            title: "Kargarden Museum", 
            description: "Kargarden Museum is an automotive exhibition held at the Jardin d'Albertras in Bouc-Bel-Air, " +
            "featuring a curated selection of classic and modern cars from a variety of iconic brands. The event offers a " +
            "unique experience for car enthusiasts, collectors, and families alike, blending automotive heritage with a " +
            "relaxed outdoor atmosphere." 
        },
    ];

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
                    <BlurFade duration={1} delay={0.25 * 0.05} inView>
                        <Safari imageUrl={"assets/img/home1.jpg"} title={"jeremygross.pictures"} />
                    </BlurFade>
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
                    <BlurFade duration={1} delay={0.25 + 1 * 0.05} inView>
                        <Safari imageUrl={"assets/img/home2.jpg"} title={"jeremygross.pictures"} />
                    </BlurFade>
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
                    <BlurFade duration={1} delay={0.75 + 2* 0.05} inView>
                        <Safari imageUrl={"assets/img/home3.jpg"} title={"jeremygross.pictures"} />
                    </BlurFade>
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

            <Box sx={{
                padding: '50px 0',
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '20px'
            }}>
                {homeProjects.map((item) => (
                    <HomeProject imgSrc={item.imgUrl} title={item.title} description={item.description}/>
                ))}
            </Box>
        </Base>
    )
}

export default Home;