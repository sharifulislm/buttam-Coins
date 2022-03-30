import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './components/Homepage/Homepage';
import About from './components/About/About';





const App = () => {
  return (
    <div>

<Header> </Header>
      
 <Routes> 
<Route path='/' element={<HomePage></HomePage>}>  </Route>
<Route path='About' element={<About> </About>}></Route>



 </Routes>

    </div>
  );
};

export default App;