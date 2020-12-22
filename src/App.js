// Global style
import GlobalStyle from './components/GlobalStyle';
// Import pages
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import OurWork from './pages/OurWork';
import Nav from './components/Nav';
// Router
import {Switch, Route} from 'react';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Route path="/">
        <AboutUs />
      </Route>
      <Route path="/work">
        <OurWork />
      </Route>
      <Route path="/contact">
        <ContactUs />
      </Route>
    </div>
  );
}

export default App;
