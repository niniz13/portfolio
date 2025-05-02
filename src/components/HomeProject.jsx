import { Box, Typography } from "@mui/material";

const HomeProject = ({imgSrc, title, description}) => {
    return(
        <Box sx={{
            width: '400px',
            padding: "20px",
            margin: '50px',
            border: 'solid 1px #B4B4B4',
            borderRadius: '25px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: "10px"
        }}>
            <img style={{
                height: '250px',
                objectFit: 'cover',
                borderRadius: '20px'
            }} src={imgSrc} />
            <Typography sx={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '22px',
                fontWeight: '800',
                letterSpacing: '-5%',
                lineHeight: '26px'
            }}>
                {title}
            </Typography>
            <Typography sx={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '16px',
                fontWeight: '600',
                letterSpacing: '-5%',
                lineHeight: '20px'
            }}>
                {description}
            </Typography>
        </Box>
    )
}

export default HomeProject;