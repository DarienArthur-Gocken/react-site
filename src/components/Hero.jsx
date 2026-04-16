import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div>
        <h2>Trees in Washington</h2>
        <p>This page discusses various trees in Washington, including the state tree and part of why Washington State is host to a wide variety of trees due to it's proximity to the Pacific Ocean, and the wide range of climates and altitudes from sea level to tall mountaintops.</p>
      </div>
      <img src="/hero-image.jpg" alt="A tree identification book that tells how to depict common trees in Washington State" />
    </section>
  );
}

export default Hero;