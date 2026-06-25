import Header from '../../components/Header/Header';
import './Home.scss';
import '../../styles/shared.scss';

function Home() {
  return (
    <main>
      <Header />
      <section id="hero">
        <article>
          <h1>Choose the design you like and apply for card right now</h1>
          <button className="button-primary">Choose the card</button>
        </article>
        <article className="card-gallery">
          <img
            src="/cardImage1.png"
            alt="Card design 1"
            width={250}
            height={150}
          />
          <img
            src="/cardImage2.png"
            alt="Card design 2"
            width={250}
            height={150}
          />
          <img
            src="/cardImage3.png"
            alt="Card design 3"
            width={250}
            height={150}
          />
          <img
            src="/cardImage4.png"
            alt="Card design 4"
            width={250}
            height={150}
          />
        </article>
      </section>
      <section id="skills">
        <img
          src="/Illustration1.png"
          alt="illestration 1"
          width={500}
          height={415}
        />
        <article>
          <h2>We Provide Many Features You Can Use</h2>
          <p>
            You can explore the features that we provide with fun and have their
            own functions each feature
          </p>
          <ul>
            <li>Powerfull online protection.</li>
            <li>Cashback without borders.</li>
            <li>Personal design</li>
            <li>Work anywhere in the world</li>
          </ul>
        </article>
      </section>
    </main>
  );
}

export default Home;
