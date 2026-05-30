import '../style-sheets/ZineCard.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function ZineButton({ volume_name }) {
    return (
        <Link to={`/volume/${volume_name}`}>
            <Button variant="primary">Read Now</Button>
        </Link>
    );
}

function ZineCard({ volumeData, index }) {
    let img_src = `${process.env.PUBLIC_URL}/img/${volumeData.cover_img_name}`;

    return (
        <Card className="zine-card">
            <Card.Img variant="top" src={img_src} />
            <Card.Body>
                <Card.Title>{volumeData.volume_name}</Card.Title>
                <Card.Text>
                    First published: {volumeData.publication_date}
                </Card.Text>
                {volumeData.hey_zine_url ? (
                    <ZineButton volume_name={volumeData.volume_name} />
                ) : null}
            </Card.Body>
        </Card>
    );
}

export default ZineCard;