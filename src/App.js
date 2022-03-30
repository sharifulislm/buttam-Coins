import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './components/Homepage/Homepage';
import CoinDetails from './components/CoinDetails/CoinDetails'
import About from './components/About/About';
import Footer from './components/Footer/Footer'
import Coins from './components/Coins/Coins'
import Contact from './components/Contact/Contact';
import BdAddress from './components/Contact/BdAddress'
import UsAddress from './components/Contact/UsAddress'
import NotFound from './components/NotFound/NotFound'






const App = () => {
  return (
    <div>

<Header> </Header>
      
 <Routes> 
<Route path='/' element={<HomePage></HomePage>}>  </Route>
<Route path='/coins' element={<Coins />} />
<Route path='/coin-details/:id' element={<CoinDetails />} />
<Route path='About' element={<About> </About>}></Route>
<Route path='/contact' element={<Contact />}>
          <Route path='bd-address' element={<BdAddress />} />
          <Route path='us-address' element={<UsAddress />} />
        </Route>
        <Route path='*' element={<NotFound />} />


 </Routes>
 <Footer></Footer>

    </div>
  );
};

export default App;