import './style-sheets/latest-volume.css';
import Paper from './img/paper_strip_1.png';

function ZineEmbed() {
    return (
        <iframe
            allowfullscreen="allowfullscreen"
            allow="clipboard-write"
            scrolling="no"
            className="fp-iframe zine-embed"
            style={{border: '1px solid lightgray', width: '100%', height: '400px'}}
            src="https://heyzine.com/flip-book/53971b689e.html" />
    );
}

function LatestVolume() {
    return (
        <section className="latest-volume">
            <div className="lv-image-container header">
                <img src={Paper} alt="A strip of paper, serving as the background for the page title." />
                <h1>Latest Volume</h1>
            </div>
            <ZineEmbed />
            <div className="lv-image-container cta">
                <img src={Paper} alt="A strip of paper, serving as the background for the page title." />
                <p>Like what you see?<br/><a href="https://ko-fi.com/papercutszinecdf">Consider donating.</a></p>
            </div>
        </section>
    )
}

export default LatestVolume;