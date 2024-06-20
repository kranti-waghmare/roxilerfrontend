import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import axios from 'axios';
import dayjs from 'dayjs';
import quarterOfYear from 'dayjs/plugin/quarterOfYear';

dayjs.extend(quarterOfYear);

const Column = () => {
  const [series , setSeries] = useState([{
    name: "sales",
    data: [{
      x: '0-100',
      y: 60
    }, {
      x: '101-200',
      y: 50
    }, {
      x: '201-300',
      y: 40
    }, {
      x: '301-400',
      y: 10
    }, {
      x: '401-500',
      y: 33
    }, {
      x: '501-600',
      y: 58
    }, {
      x: '601-700',
      y: 20
    }, 
    {
        x: '701-800',
        y: 60
      }, {
        x: '801-900',
        y:30
      },{
      x: '901-above',
      y: 60
    }]
  }]);
  const [month, setMonth] = useState("06"); // Default month to June
  const [options, setOptions] = useState({
    chart: {
      type: 'bar',
      height: 380
    },
    xaxis: {
      type: 'category',
      labels: {
        formatter: function(val) {
          return val;
        }
      }
    },
    yaxis: {
      labels: {
        formatter: function(value) {
          return value % 2 === 0 ? value : '';
        }
      },
      min: 0,
      max: 80,
      tickAmount: 8,
    },
    title: {
      text: 'Price Range Distribution',
    }
  });

  const fetchData = async (selectedMonth) => {
    try {
      const response = await axios.get('https://s3.amazonaws.com/roxiler.com/product_transaction.json');
      const data = response.data;

      const filteredData = data.filter(item => dayjs(item.date).month() + 1 === parseInt(selectedMonth));

      const ranges = [
        { label: '0-100', min: 0, max: 100 },
        { label: '101-200', min: 101, max: 200 },
        { label: '201-300', min: 201, max: 300 },
        { label: '301-400', min: 301, max: 400 },
        { label: '401-500', min: 401, max: 500 },
        { label: '501-600', min: 501, max: 600 },
        { label: '601-700', min: 601, max: 700 },
        { label: '701-800', min: 701, max: 800 },
        { label: '801-900', min: 801, max: 900 },
        { label: '901-above', min: 901, max: Infinity }
      ];

      const rangeCounts = ranges.map(range => {
        return {
          range: range.label,
          count: filteredData.filter(item => item.price >= range.min && item.price <= range.max).length
        };
      });

      const categories = rangeCounts.map(item => item.range);
      const counts = rangeCounts.map(item => item.count);

      setOptions(prevOptions => ({
        ...prevOptions,
        xaxis: {
          ...prevOptions.xaxis,
          categories: categories
        }
      }));

      setSeries([{ name: 'Items', data: counts }]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData(month);
  }, [month]);

  return (
    <div>
      <div id="chart">
        <ReactApexChart options={options} series={series} type="bar" height={380} />
      </div>
      <div className="actions">
        <select onChange={(e) => setMonth(e.target.value)} value={month}>
          <option value="01">January</option>
          <option value="02">February</option>
          <option value="03">March</option>
          <option value="04">April</option>
          <option value="05">May</option>
          <option value="06">June</option>
          <option value="07">July</option>
          <option value="08">August</option>
          <option value="09">September</option>
          <option value="10">October</option>
          <option value="11">November</option>
          <option value="12">December</option>
        </select>
      </div>
    </div>
  );
}

export default Column;
