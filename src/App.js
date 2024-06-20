
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import BarChart from './components/BarChart';
import Column from './components/Column';
import PieChart from './components/PieChart';
import Statistics from './components/Statistics';



function App() {
  return (
   <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/piechart' element={<PieChart/>}/>
          <Route path='/column' element={<Column/>}/>
          <Route path='/statistics' element={<Statistics/>}/>



         
        </Routes>
      </Router>
      {/* http://localhost:3001/api/bar-chart-data?month=${month} */}
   
   </>
  );
}

export default App;
