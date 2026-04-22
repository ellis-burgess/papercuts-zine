import '../style-sheets/LatestVolume.css';
import Paper from '../img/paper_strip_1.png';
import ZineEmbed from './ZineEmbed';

function LatestVolume() {
    return (
        <section className="latest-volume">
            <div className="lv-image-container header">
                <img src={Paper} alt="A strip of paper, serving as the background for the page title." />
                <h1>Latest Volume</h1>
            </div>
            <ZineEmbed src_url={"https://heyzine.com/flip-book/c1736e1227.html"} />
            <div className="lv-image-container cta">
                <img src={Paper} alt="A strip of paper, serving as the background for the page title." />
                <p>Like what you see?<br/><a href="https://ko-fi.com/papercutszinecdf">Consider donating.</a></p>
            </div>
        </section>
    )
}

export default LatestVolume;