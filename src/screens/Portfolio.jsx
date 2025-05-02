import Base from "@/components/Base";
import { ImageList, ImageListItem, useMediaQuery, useTheme } from "@mui/material";
import { BlurFade } from "@/components/magicui/blur-fade";

const Portfolio = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    const pictures = [
        {
            img: 'assets/img/portfolio/portfolio1.jpg',
            title: 'Breakfast',

        },
        {
            img: 'assets/img/portfolio/portfolio2.jpg',
            title: 'Burger',
        },
        {
            img: 'assets/img/portfolio/portfolio3.jpg',
            title: 'Camera',
        },
        {
            img: 'assets/img/portfolio/portfolio4.jpg',
            title: 'Coffee',
        },
        {
            img: 'assets/img/portfolio/portfolio5.jpg',
            title: 'Hats',
        },
        {
            img: 'assets/img/portfolio/portfolio6.jpg',
            title: 'Honey',
        },
        {
            img: 'assets/img/portfolio/portfolio7.jpg',
            title: 'Basketball',
        },
        {
            img: 'assets/img/portfolio/portfolio8.jpg',
            title: 'Fern',
        },
        {
            img: 'assets/img/portfolio/portfolio9.jpg',
            title: 'Mushrooms',
        },
        {
            img: 'assets/img/portfolio/portfolio10.jpg',
            title: 'Tomato basil',
        },
        {
            img: 'assets/img/portfolio/portfolio11.jpg',
            title: 'Sea star',
        },
        {
            img: 'assets/img/portfolio/portfolio12.jpg',
            title: 'Bike',
        },
    ];

    return (
        <Base>
            <ImageList sx={{ padding: isMobile ? '20px' : '50px 175px', }} variant="masonry" cols={3} >
                {pictures.map((item, idx) => (
                    <BlurFade key={item.img} delay={0.25 + idx * 0.05} inView>
                        <ImageListItem key={item.img}>
                            <img
                                style={{ borderRadius: '20px' }}
                                src={item.img}
                                alt={item.title}
                                loading="lazy"
                            />
                        </ImageListItem>
                    </BlurFade>

                ))}
            </ImageList>
        </Base>
    )
}

export default Portfolio;