import React from "react";
import Loader from "components/Loader";
import Error from "components/Error";
import useBeers from "hooks/useBeers";
import { formatPersistence, formatPrice } from "utils/formatUnits";
import styles from "./ListOfBeers.module.css";

const ListOfBeers = () => {
  const { loading, error, beers } = useBeers();

  if (!beers) {
    return (
      <>
        {loading && <Loader />}
        {error && <Error message={error} />}
      </>
    );
  }

  return (
    <div className={styles.beersGrid}>
      <div className={styles.titlesGrid}>
        <p className={`${styles.gridTitle} item`}>Nombre</p>
        <p className={`${styles.gridTitle} item`}>SKU</p>
        <p className={`${styles.gridTitle} item`}>% Presencia</p>
        <p className={`${styles.gridTitle} item`}>Av. Price</p>
        <p className={`${styles.gridTitle} item`}>Av. Position</p>
      </div>
      {beers.map((beer) => (
        <div key={beer.id} className={styles.gridRow}>
          <div className={styles.beerItem}>
            <img
              src={beer.productImage}
              alt={beer.name}
              className={styles.beerImg}
            />
            <p className={`${styles.beerName} item`}>{beer.name}</p>
          </div>
          <p className={`${styles.beerText} item`}>{beer.sku}</p>
          <p
            style={{ color: beer.persistence < 0 ? "#D6215B" : "#23B794" }}
            className="item"
          >
            {formatPersistence(Math.abs(beer.persistence))}
          </p>
          <p className={`${styles.beerText} item`}>
            {formatPrice(beer.averagePrice)}
          </p>
          <p className={`${styles.beerText} item`}>{beer.averagePosition}</p>
        </div>
      ))}
    </div>
  );
};

export default ListOfBeers;
