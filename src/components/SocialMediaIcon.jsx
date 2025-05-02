import { useState } from "react";

const SocialMediaIcon = ({ imgSrc, url }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img
                style={{
                    width: '100px',
                    borderRadius: '20px',
                    transition: 'transform 0.3s ease',
                    transform: isHovered ? 'rotate(10deg)' : 'rotate(0deg)',
                }}
                src={imgSrc}
                alt="social media icon"
            />
        </a>
    );
};

export default SocialMediaIcon;
