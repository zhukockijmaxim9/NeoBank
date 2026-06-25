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
            src="/cards/cardImage1.png"
            alt="Card design 1"
            width={250}
            height={150}
          />
          <img
            src="/cards/cardImage2.png"
            alt="Card design 2"
            width={250}
            height={150}
          />
          <img
            src="/cards/cardImage3.png"
            alt="Card design 3"
            width={250}
            height={150}
          />
          <img
            src="/cards/cardImage4.png"
            alt="Card design 4"
            width={250}
            height={150}
          />
        </article>
      </section>

      <section id="skills">
        <img
          src="/illustrations/Illustration1.png"
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

      <section id="bank">
        <div>
          <h3>Exchange rate in internet bank</h3>
          <p>Update every 15 minutes, MSC 09.08.2022</p>
        </div>
        <p>Currency</p>
        <article>
          <table>
            <tbody>
              <tr>
                <td className="alternative-gray">USD:</td>
                <td> 60.78</td>
                <td className="alternative-gray">CNY:</td>
                <td> 9.08</td>
                <td className="alternative-gray">CHF:</td>
                <td> 64.78</td>
              </tr>
              <tr>
                <td className="alternative-gray">USD:</td>
                <td> 60.78</td>
                <td className="alternative-gray">TRY:</td>
                <td> 3.39</td>
                <td className="alternative-gray">TRY:</td>
                <td> 3.39</td>
              </tr>
            </tbody>
          </table>
          <img src="/illustrations/bank.png" height={115} width={120} />
        </article>
        <p className="alternative-white">All courses</p>
      </section>
    </main>
  );
}

export default Home;
