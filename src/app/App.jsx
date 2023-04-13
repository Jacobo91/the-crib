import { NavBar } from "../components/NavBar";
import { Hero } from "../components/Hero";
import { Card } from "../components/Card";
import { data } from "../data";
import logoLetters from '../images/title-logo.png';

function App() {
  
  return (
    <>
      <NavBar/>
      <Hero/>
      <main>
        <section className="about">

          <h1>real estate in <br /> medellin</h1>

          <section className="about-info">

            <article>
              <h2>Short and long term rental:</h2>
              <p>We help to find the right furnished properties on a budget. National or foreign buyers and investors will find a furnished property according to their requirements</p>
            </article>

            <article>
              <h2>Property portfolio:</h2>
              <p>We comprehensively manage more than 170 of our properties</p>
            </article>

            <article>
              <h2>Purchase and sell:</h2>
              <p>We offer a wide network of buyers and sellers to provide our investors the best experience</p>
            </article>

            <article>
              <h2>Remodeling and decoration:</h2>
              <p>We make sure of your comfort by providing modern all-inclusive properties</p>
            </article>

          </section>

        </section>
        <section className="gallery">
          {
            data.map(property => (
              <Card property={property} key={property.id} />
            ))
          }
        </section>
      </main>
      <footer>
        <img src={logoLetters} alt="" className="footer--logo"/>
        <section className="contact-us">
          <h4>Contact Us:</h4>
          <a 
            href="https://wa.me/3505468657"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn"
          >
            <i className="fa-brands fa-whatsapp"></i>
            <span
              style={{
                marginLeft: '10px',
              }}
            >3505468657</span>
          </a>
        </section>
      </footer>
    </>
  );
}

export default App;
