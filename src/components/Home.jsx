

import '../App.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PieChart from './PieChart';
import Column from './Column';

const Home= () => {
  const [transactions, setTransactions] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState('03'); // Default to March ('03')
  const [searchText, setSearchText] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  // Fetch transactions based on selected month and search text
  const fetchTransactions = async () => {
    try {
      const response = await axios.get(`: https://s3.amazonaws.com/roxiler.com/product_transaction.json`, {
        params: {
          month: selectedMonth,
          search: searchText,
          page: currentPage
        }
      });
      setTransactions(response.data.transactions);
    } catch (error) {
      console.error('Error fetching transactions:', error);
    }
  };

  // Load transactions when component mounts or dependencies change
  useEffect(() => {
    fetchTransactions();
  }, [selectedMonth, searchText, currentPage]);

  // Handle next page click
  const handleNextPage = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  // Handle previous page click
  const handlePrevPage = () => {
    // if (currentPage > 1) {
    //   setCurrentPage(prevPage => prevPage - 1);
     
    // }
    setCurrentPage(prevPage => prevPage - 1);

  };

  // Render the table rows
  const renderTableRows = () => {
    return transactions.map(transaction => (
      <tr key={transaction.id}>
        <td>{transaction.title}</td>
        <td>{transaction.description}</td>
        <td>{transaction.price}</td>
      </tr>
    ));
  };

  // Render the component
  return (
    <>
   <br />
   

           <div style={{borderRadius : '50%',border:'1px solid red', height : '20vh' , width : '10vw', padding : '10px', margin : 'auto', background : 'skyblue', color : 'white'} }>
                <h3 style={{margin : 'auto',marginTop : '35px',marginLeft : '15px', fontSize : 'bold'}} onClick={handleNextPage}> <a href="PieChart"  className='btn'>Transaction Dashboard</a> </h3>
           </div>

    <div style={{display: 'flex', justifyContent: 'space-evenly'}}>

<button style={{backgroundColor : 'khaki' , border : '1px solid khaki' , padding: '13px' ,width : '17vw' , borderRadius : '25px',fontWeight : 'bold', fontSize : '17px'}}>  <a href="Column" className='btn'>Search Transaction</a> </button>




<select name="select" id="select" style={{backgroundColor : 'khaki' , border : '1px solid khaki' , padding: '12px' ,width : '17vw' , borderRadius : '15px',fontWeight : 'bold', fontSize : '17px'}}>
 
  
     
      <option value="feb">Select Month</option>
      <option value="jan">January</option>
      <option value="feb">February</option>
      <option value="feb">March</option>
      <option value="feb">April</option>
      <option value="feb">May</option>
      <option value="feb">June</option>
      <option value="feb">July</option>
      <option value="feb">August</option>
      <option value="feb">September</option>
      <option value="feb">October</option>
      <option value="feb">November</option>
      <option value="feb">December</option>
  </select>
    </div><br /> <br />

    <table style={{padding : '10px' , margin : 'auto' , borderRadius : '45px', background : '#e8ce63'}}>
      <thead >
        <tr >
          <th className='samecopy'>ID</th>
          <th className='samecopy'>Title</th>
          <th className='samecopy'>Description</th>
          
          <th className='samecopy'>Price</th>
          <th className='samecopy'>Category</th>
          <th className='samecopy'>Sold</th>
          <th className='copy'>Image</th>
        </tr>
        <tr >
          <th className='samecopy'></th>
          <th className='samecopy'></th>
          <th className='samecopy'></th>
          
          <th className='samecopy'></th>
          <th className='samecopy'></th>
          <th className='samecopy'></th>
          <th className='copy'></th>
        </tr>

        <tr >
          <th className='samecopy'></th>
          <th className='samecopy'></th>
          <th className='samecopy'></th>
          
          <th className='samecopy'></th>
          <th className='samecopy'></th>
          <th className='samecopy'></th>
          <th className='copy'></th>
        </tr>
        <tr >
          <th className='same'></th>
          <th className='same'></th>
          <th className='same'></th>
          
          <th className='same'></th>
          <th className='same'></th>
          <th className='same'></th>
          <th className=''></th>
        </tr>
      </thead>
     
   </table>
   
   <div style={{display : 'flex' , justifyContent : 'space-evenly'}}>
   <h3 className='btn' onClick={handlePrevPage} ><a href="Statistics"  className='btn1'>Page No.1</a> </h3>
     <h3 className='btn' onClick={handlePrevPage} ><a href="Column" className='btn1'>Previous</a> </h3>
     <h3 className='btn' onClick={handleNextPage}><a href="PieChart" className='btn'>Next</a> </h3>
     <h3 className='btn' onClick={handlePrevPage} ><a href="Statistics" className='btn1'>Page no.10</a> </h3>
   </div>
   
<div>
</div>
      
     
    </>
   
  );
};

export default Home;

