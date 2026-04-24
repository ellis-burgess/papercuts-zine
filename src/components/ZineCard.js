import '../style-sheets/ZineCard.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function ZineButton({ target_url }) {
    return (
        <a href={target_url}>
            <Button variant="primary">Read Now</Button>
        </a>
    );
}

function ZineCard({ volumeData, index }) {
    console.log(volumeData);
    let img_src = `${process.env.PUBLIC_URL}/img/${volumeData.cover_img_name}`;
    console.log(img_src);

    return (
        <Card className="zine-card">
            <Card.Img variant="top" src={img_src} />
            <Card.Body>
                <Card.Title>{volumeData.volume_name}</Card.Title>
                <Card.Text>
                    First published: {volumeData.publication_date}
                </Card.Text>
                {volumeData.hey_zine_url ? (
                    <ZineButton target_url={volumeData.hey_zine_url} />
                ) : null}
            </Card.Body>
        </Card>
    );
}

export default ZineCard;