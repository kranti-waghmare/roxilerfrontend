// import React, { useState, useEffect } from 'react';
// import TransactionsTable from './TransactionsTable';
// import Statistics from './Statistics';
// import BarChart from './BarChart';

// const App= () => {
//     const [month, setMonth] = useState('03');
//     const [transactions, setTransactions] = useState([]);
//     const [stats, setStats] = useState({});
//     const [barData, setBarData] = useState({});

//     useEffect(() => {
//         fetchTransactions();
//     }, [month]);

//     const fetchTransactions = async (search = '') => {
//         try {
//             const response = await fetch('https://s3.amazonaws.com/roxiler.com/product_transaction.json');
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             const data = await response.json();

//             const filteredData = data.filter(transaction => {
//                 const transactionMonth = new Date(transaction.dateOfSale).getMonth() + 1;
//                 return transactionMonth === parseInt(month);
//             });

//             const searchedData = filteredData.filter(transaction => 
//                 transaction.title.toLowerCase().includes(search.toLowerCase()) ||
//                 transaction.description.toLowerCase().includes(search.toLowerCase()) ||
//                 transaction.price.toString().includes(search)
//             );

//             setTransactions(searchedData);
//             calculateStatistics(searchedData);
//             calculateBarChart(searchedData);
//         } catch (error) {
//             console.error('Failed to fetch transactions:', error);
//         }
//     };

//     const calculateStatistics = (data) => {
//         const soldItems = data.filter(item => item.sold).length;
//         const notSoldItems = data.filter(item => !item.sold).length;
//         const totalSale = data.filter(item => item.sold).reduce((acc, item) => acc + item.price, 0);

//         setStats({
//             totalSale,
//             soldItems,
//             notSoldItems
//         });
//     };

//     const calculateBarChart = (data) => {
//         const ranges = {
//             '0-100': 0,
//             '101-200': 0,
//             '201-300': 0,
//             '301-400': 0,
//             '401-500': 0,
//             '501-600': 0,
//             '601-700': 0,
//             '701-800': 0,
//             '801-900': 0,
//             '901-above': 0,
//         };

//         data.forEach(item => {
//             if (item.price <= 100) ranges['0-100']++;
//             else if (item.price <= 200) ranges['101-200']++;
//             else if (item.price <= 300) ranges['201-300']++;
//             else if (item.price <= 400) ranges['301-400']++;
//             else if (item.price <= 500) ranges['401-500']++;
//             else if (item.price <= 600) ranges['501-600']++;
//             else if (item.price <= 700) ranges['601-700']++;
//             else if (item.price <= 800) ranges['701-800']++;
//             else if (item.price <= 900) ranges['801-900']++;
//             else ranges['901-above']++;
//         });

//         setBarData(ranges);
//     };

//     return (
//         <div>
//             <h1>Transaction Dashboard</h1>
//             <select onChange={e => setMonth(e.target.value)} value={month}>
//                 {[...Array(12).keys()].map(i => (
//                     <option key={i} value={String(i + 1).padStart(2, '0')}>
//                         {new Date(0, i).toLocaleString('en', { month: 'long' })}
//                     </option>
//                 ))}
//             </select>
//             <input type="text" placeholder="Search transaction" onChange={e => fetchTransactions(e.target.value)} />
//             <TransactionsTable transactions={transactions} />
//             <Statistics stats={stats} />
//             <BarChart data={barData} />
//         </div>
//     );
// };

// export default App;


import React from 'react'

const Statistics = () => {
  return (
    <>
     <h1>Statistics-selected month</h1> 

     <div style={{background :'khaki',borderRadius: '25px',display : 'flex' , justifyContent : 'space-evenly', width : '20vw'}}>
        <div>
        <p>Total Sale</p>
        <p>Total sold item</p>
        <p>Total not sold item</p>
        </div>

        <div>
        <p>100000</p>
        <p>55</p>
        <p>15</p>
        </div>

       


        
        


     </div>

    </>
  )
}

export default Statistics
