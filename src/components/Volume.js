import { useState, useEffect } from 'react';
import '../style-sheets/Volume.css';
import Paper from '../img/paper_strip_1.png';
import ZineEmbed from './ZineEmbed';
import { fetchVolumesData, getVolumeByNumber } from '../utils/csvParser';
import {useParams} from "react-router-dom";

function Volume() {
    const { volumeNumber } = useParams();
    const [srcUrl, setSrcUrl] = useState(null);
    const [volumeName, setVolumeName] = useState(null);
    const [loading, setLoading] = useState(true);

    console.log("volumeNumber: ", volumeNumber);

    useEffect(() => {
        const loadVolume = async () => {
            const volumesData = await fetchVolumesData();
            const volume = getVolumeByNumber(volumesData, volumeNumber);
            if (volume) {
                setSrcUrl(volume.hey_zine_url);
                setVolumeName(volume.volume_name);
            }
            setLoading(false);
        };

        loadVolume();
    }, []);

    return (
        <section className="volume">
            <div className="image-container header">
                <img src={Paper} alt="A strip of paper, serving as the background for the page title." />
                {loading ? (
                    <h1>Loading...</h1>
                ) : volumeName ? (
                    <h1>{volumeName}</h1>
                ) : (
                    <h1>Volume {volumeNumber}</h1>
                )}
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

export default Volume;