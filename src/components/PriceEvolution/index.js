import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import Loader from "components/Loader";
import Error from "components/Error";
import usePriceEvolution from "hooks/usePriceEvolution";
import {
  extractPriceEvolution,
  extractDateEvolution,
} from "utils/extractPricesData";

const PriceEvolution = () => {
  const { loading, error, prices } = usePriceEvolution();
  const [series, setSeries] = useState([]);
  const [categories, setCategories] = useState([]);

  const options = {
    stroke: {
      curve: "smooth",
    },
    legend: {
      fontSize: "14px",
      fontFamily: "Hind, sans-serif",
      fontWeight: 400,
    },
    xaxis: {
      categories: categories,
      labels: {
        style: {
          fontFamily: "Hind, sans-serif",
          cssClass: "t-small t-regular",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          fontFamily: "Hind, sans-serif",
          cssClass: "t-small t-regular",
        },
        formatter: function (val) {
          return `$${val}`;
        },
      },
    },
    colors: ["#D6215B", "#7530B2", "#FFB448"],
  };

  useEffect(() => {
    setSeries(extractPriceEvolution(prices));
    setCategories(extractDateEvolution(prices));
  }, [prices]);

  if (!prices) {
    return (
      <>
        {loading && <Loader />}
        {error && <Error message={error} />}
      </>
    );
  }

  return (
    <Chart
      options={options}
      series={series}
      type="line"
      width="868"
      height="407"
    />
  );
};

export default PriceEvolution;
