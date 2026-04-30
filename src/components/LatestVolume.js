import { useState, useEffect } from 'react';
import '../style-sheets/LatestVolume.css';
import Paper from '../img/paper_strip_1.png';
import ZineEmbed from './ZineEmbed';
import { fetchVolumesData, getLatestVolume } from '../utils/csvParser';

function LatestVolume() {
    const [srcUrl, setSrcUrl] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadLatestVolume = async () => {
            const volumesData = await fetchVolumesData();
            const latestVolume = getLatestVolume(volumesData);
            if (latestVolume) {
                setSrcUrl(latestVolume.hey_zine_url);
            }
            setLoading(false);
        };

        loadLatestVolume();
    }, []);

    return (
        <section className="latest-volume">
            <div className="image-container header">
                <img src={Paper} alt="A strip of paper, serving as the background for the page title." />
                <h1>Latest Volume</h1>
            </div>
            {loading ? (
                <div className="zine-embed"><p>Loading...</p></div>
            ) : srcUrl ? (
                <ZineEmbed src_url={srcUrl} />
            ) : (
                <div className="zine-embed"><p>Unable to load zine.</p></div>
            )}
            <div className="image-container cta">
                <img src={Paper} alt="A strip of paper, serving as the background for the page title." />
                <p>Like what you see?<br/><a href="https://ko-fi.com/papercutszinecdf">Consider donating.</a></p>
            </div>
        </section>
    )
}

export default LatestVolume;