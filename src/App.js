import './App.css';
import BloodyHand from './img/homepage_bloody_hand.png';

function Hero() {
  return (
    <section className="hero">
      <h1 class="hero-title">Welcome to<br/><span class="title">Paper<br/>cuts</span></h1>
      <img src={BloodyHand} alt="Black and white hand dripping with blood" className="hero-image" />
    </section>
  );
}

function InfoSection() {
  return (
    <section className="info">
      <h2 class="info-title">We want to unnerve you.</h2>
      <a href="/latest"><button class="info-button">Read now</button></a>
    </section>
  )
}

function App() {
  return (
    <div className="App">
      <Hero />
      <InfoSection />
    </div>
  );
}

export default App;
