import { useState, useEffect } from 'react';
import '../style-sheets/Volume.css';
import Paper from '../img/paper_strip_1.png';
import ZineEmbed from './ZineEmbed';
import { fetchVolumesData, getVolumeByName } from '../utils/csvParser';
import {useParams} from "react-router-dom";

function Volume() {
    const { volumeName } = useParams();
    const [srcUrl, setSrcUrl] = useState(null);
    const [loading, setLoading] = useState(true);

    console.log("VolumeName: ", volumeName);

    useEffect(() => {
        const loadVolume = async () => {
            const volumesData = await fetchVolumesData();
            const volume = getVolumeByName(volumesData, volumeName);
            if (volume) {
                setSrcUrl(volume.hey_zine_url);
            }
            setLoading(false);
        };

        loadVolume();
    }, []);

    return (
        <section className="volume">
            <div className="image-container header">
                <img src={Paper} alt="A strip of paper, serving as the background for the page title." />
                <h1>{volumeName}</h1>
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