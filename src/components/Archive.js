import '../style-sheets/Archive.css';
import { useState, useEffect } from 'react';
import Paper from '../img/paper_strip_1.png';
import { fetchVolumesData } from '../utils/csvParser';
import ZineCard from './ZineCard';

function Archive() {
    const [volumes, setVolumes] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadVolumes = async () => {
            const volumesData = await fetchVolumesData();
            while (volumesData.length < 3) {
                volumesData.push({
                    "volume_name": "Coming Soon...",
                    "publication_date": "TBC",
                    "cover_img_name": "coming_soon.png"
                })
            }
            setVolumes(volumesData);
            setLoading(false);
        };

        loadVolumes();
    }, [])


    return (
        <section className="archive">
            <div className="archive-header">
                <div className="image-container header">
                    <img src={Paper} alt="A strip of paper, serving as the background for the page title." />
                    <h1>Archive</h1>
                </div>
            </div>

            {loading ? (
                <div className="zine-cards"><p>Loading...</p></div>
            ) : volumes ? (
                <div className="zine-cards">
                    {volumes.map((item, index) => (
                        <ZineCard volumeData={item} index={index} />
                    ))}
                </div>
            ) : (
                <div className="zine-cards"><p>Unable to load zines.</p></div>
            )}
        </section>
    )
}

export default Archive;