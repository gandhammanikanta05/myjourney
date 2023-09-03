import {Route, BrowserRouter, Routes} from 'react-router-dom'
import LoginPage from './Components/LoginPage';
import NewAccount from './Components/NewAccount';
import './App.css';

const App = () => (
    <BrowserRouter>
      <Routes>
        <Route exact path='/LoginPage' Component={LoginPage} />
        <Route exact path="/NewAccount" Component={NewAccount} />
      </Routes>
    </BrowserRouter>  
)

export default App;





/* import React, { useEffect, useState } from 'react'
import Axios from 'axios';

function App() {
  const [data, setData] = useState("");

  const getData = async() => {
    const response = await Axios.get("http://localhost:5000/getData");
    setData(response.data);
  }

  useEffect(() => {
    getData()
  }, []);
  return (
    <div>
      {data}
    </div>
  );
}

export default App;
 */