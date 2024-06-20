import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import axios from "axios";

const PieChart = () => {
  const [series, setSeries] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  const [labels, setLabels] = useState([
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]);
  const [month, setMonth] = useState("");


  const [options] = useState({
    chart: {
      width: 380,
      type: "donut",
    },
    dataLabels: {
      enabled: false,
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            show: false,
          },
        },
      },
    ],
    legend: {
      position: "right",
      offsetY: 0,
      height: 230,
    },
    labels: labels,
  });
  const appendData = () => {
    setSeries((prevSeries) => [
      ...prevSeries,
      Math.floor(Math.random() * (100 - 1 + 1)) + 1,
    ]);
  };

  const removeData = () => {
    if (series.length === 1) return;
    setSeries((prevSeries) => prevSeries.slice(0, prevSeries.length - 1));
  };

  const randomize = () => {
    setSeries((prevSeries) =>
      prevSeries.map(() => Math.floor(Math.random() * (100 - 1 + 1)) + 1)
    );
  };

  const reset = () => {
    setSeries([44, 55, 13, 33]);
  };

  const fetchData = async (selectedMonth) => {
    try {
      const response = await axios.get(
        `https://s3.amazonaws.com/roxiler.com/product_transaction.json=${selectedMonth}`
      );
      const data = response.data;

      const categories = data.map((item) => item.category);
      const counts = data.map((item) => item.count);

      setLabels(categories);
      setSeries(counts);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData(month);
  }, [month]);

  return (
    <>
      <div>
        <div className="chart-wrap">
          <div id="chart">
            <ReactApexChart
              options={{ ...options, labels: labels }}
              series={series}
              type="donut"
              width={380}
            />
          </div>
        </div>

        
      </div>
      <div>
        <div className="actions">
          <button onClick={appendData}>+ ADD</button>
          <button onClick={removeData}>- REMOVE</button>
          <button onClick={randomize}>RANDOMIZE</button>
          <button onClick={reset}>RESET</button>
        </div>
      </div>
    </>
  );
};

export default PieChart;
