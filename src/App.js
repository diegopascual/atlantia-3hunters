import Header from "components/Header";
import PriceEvolution from "components/PriceEvolution";
import PresenceShare from "components/PresenceShare";
import ListOfBeers from "components/ListOfBeers";
import styles from "./App.module.css";

function App() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <h2 className="title">General Perfomance Analysis</h2>
        <div className={styles.charts}>
          <div>
            <h3 className="section">Price Evolution</h3>
            <div className={styles.chart}>
              <PriceEvolution />
            </div>
          </div>
          <div>
            <h3 className="section">Presence Share by Product</h3>
            <div className={styles.chart}>
              <PresenceShare />
            </div>
          </div>
        </div>
        <h3 className="section">Comparative Analysis</h3>
        <ListOfBeers />
      </main>
    </>
  );
}

export default App;
