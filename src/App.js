// Global style
import GlobalStyle from './components/GlobalStyle';
//import pages
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import OurWork from './pages/OurWork';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AboutUs />  
      <OurWork />  
      <ContactUs />  
    </div>
  );
}

export default App;
