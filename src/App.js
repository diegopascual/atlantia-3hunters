import Header from "components/Header";
import ListOfBeers from "components/ListOfBeers";
import styles from "./App.module.css";

function App() {
  return (
    <>
      <Header />
      <h1 className="title">Titulo principal</h1>
      <h2 className="subtitle">Subtitle</h2>
      <section className="section">section</section>
      <p className="item">item</p>
      <p className="t-small t-medium">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English
      </p>
      <ListOfBeers />
    </>
  );
}

export default App;
