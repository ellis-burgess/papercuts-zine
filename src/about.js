import './about.css';
import Paper from './img/paper_strip_1.png';

function About() {
    return (
        <section className="about">
            <div className="about-header">
                <div className="image-container">
                    <img src={Paper} />
                    <h1>What is Papercuts?</h1>
                </div>
                <p>
                    Papercuts is the possessed brain child of a group of tortured writers and haunted artists based in Cardiff. It is their dripping collection of things that make their skin crawl and hands tingle.
                </p>
            </div>

            <div className="about-grid">
                <h2>More about us...</h2>
                <div className="about-grid-item">
                    <p>
                        Papercuts features original horror for you to hate, loathe, and revile. Expect short stories, poems, horror media reviews, illustrations, or whatever else the demons tell the makers to make.
                    </p>
                </div>
                <div className="about-grid-item">
                    <p>
                        We want to feature the creative works of everyone we can. If you want to contribute, DM us on Instagram <a href="https://www.instagram.com/papercutszinecdf/">@papercutszine</a> or email us: <span className="email"><a href="mailto:papercutszinecdf@gmail.com">papercutszinecdf@gmail.com</a></span>
                    </p>
                </div>
                <div className="about-grid-item">
                    <p>
                        Papercuts is not for profit. Any revenue we make is fed directly back towards covering costs (such as printing and web hosting) and improving future volumes.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About;