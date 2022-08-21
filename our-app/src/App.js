import * as React from 'react';
import ResponsiveAppBar from './pages/AppBar';
import PromoCarousel from './pages/PromoCarousel';
import MarketPlace from './pages/MarketPlace';
import './App.css';

function App() {

  return (
    <div>
      <div>
      <ResponsiveAppBar />
      </div>
      <div style={{margin:10}}>
      <div class="container" >
      <PromoCarousel />
      </div>
      </div>
      <div style={{margin:10}}>
      <div class="container" >
        <MarketPlace />
      </div>
      </div>
    </div>
  );
}

export default App;
