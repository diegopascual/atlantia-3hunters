import React from "react";
import useBeers from "hooks/useBeers";
import { formatPersistence, formatPrice } from "utils/formatUnits";
import styles from "./ListOfBeers.module.css";

const ListOfBeers = () => {
  const { loading, error, beers } = useBeers();

  return (
    <div className={styles.beersGrid}>
      <div className={styles.titlesGrid}>
        <p className="item">Nombre</p>
        <p className="item">SKU</p>
        <p className="item">% Presencia</p>
        <p className="item">Av. Price</p>
        <p className="item">Av. Position</p>
      </div>
      {beers.map((beer) => (
        <div key={beer.id} className={styles.gridRow}>
          <div className={styles.beerItem}>
            <img
              src={beer.productImage}
              alt={beer.name}
              className={styles.beerImg}
            />
            <p>{beer.name}</p>
          </div>
          <div className={styles.cell}>
            <p>{beer.sku}</p>
          </div>
          <p>{formatPersistence(beer.persistence)}</p>
          <p>{formatPrice(beer.averagePrice)}</p>
          <p>{beer.averagePosition}</p>
        </div>
      ))}
    </div>
  );
};

export default ListOfBeers;
