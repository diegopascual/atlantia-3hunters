import React from "react";
import Chart from "react-apexcharts";
import Loader from "components/Loader";
import Error from "components/Error";
import usePresenceShare from "hooks/usePresenceShare";

const PresenceShare = () => {
  const { loading, error, presences } = usePresenceShare();

  const options = {
    labels: presences.map((presence) => presence.name),
    colors: ["#D6215B", "#FF7A00", "#7530B2", "#23B794", "#006FFF"],
    dataLabels: {
      enabled: false,
    },
    legend: {
      offsetY: 50,
    },
  };

  if (!presences) {
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
      series={presences.map((presence) => presence.presenceShare)}
      type="pie"
      width="500"
    />
  );
};

export default PresenceShare;
