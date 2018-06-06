import React from 'react';
import Logo from './Logo';
import Header from './Header';
import Main from "./Main";
import Footer from './Footer';
import Showcase from './components/showcase';

const App = () => (
  <div>
  	<Logo />
  	<Header />
    <Main />
    <Footer />
    <Showcase title="Canali Suit" price="$2499" imgurl="canali.jpg" />
  </div>
)

export default App