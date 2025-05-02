const FooterSocialMedia = ({ url, children }) => {

    return (
        <a
            href={url}
            style={{
                cursor: 'none',
                fontFamily: 'Inter, sans-serif',
                fontSize: '14px',
                fontWeight: 600,
                letterSpacing: '-0.05em',
                color: '#4D4D4D'
            }}
        >
            {children}
        </a>
    );
};

export default FooterSocialMedia;
