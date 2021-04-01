import './App.css';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';

import Routerpages from './Routerpages';



function App() {
  return (
    <>
    <Navbar/>
      <div className="Content">
      <Routerpages/>
      </div>
      <Footer className="Footer"/>
    </>
  );
}

export default App;
