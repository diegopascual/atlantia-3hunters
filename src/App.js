import Header from "components/Header";
import PriceEvolution from "components/PriceEvolution";
import PresenceShare from "components/PresenceShare";
import ListOfBeers from "components/ListOfBeers";
import styles from "./App.module.css";

function App() {
  return (
    <>
      <Header />
      <PriceEvolution />
      <PresenceShare />
      <ListOfBeers />
    </>
  );
}

export default App;
