function ZineEmbed({ src_url }) {
    return (
        <iframe
            allowFullScreen="allowfullscreen"
            allow="clipboard-write"
            scrolling="no"
            className="fp-iframe zine-embed"
            style={{border: '1px solid lightgray', width: '100%', height: '400px'}}
            src={src_url} />
    );
}

export default ZineEmbed;