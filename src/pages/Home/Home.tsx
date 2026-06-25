import Header from '../../components/Header/Header';
import './Home.scss';

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
          <img src="/cardImage1%201.png" alt="Card design 1" width={250} height={150} />
          <img src="/cardImage2%201.png" alt="Card design 2" width={250} height={150} />
          <img src="/cardImage3%201.png" alt="Card design 3" width={250} height={150} />
          <img src="/cardImage4%201.png" alt="Card design 4" width={250} height={150} />
        </article>
      </section>
    </main>
  );
}

export default Home;
