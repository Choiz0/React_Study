import "./App.css";
import { Route,Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import {Home} from './pages/Home';
import {About} from './pages/About';
import {Store} from './pages/Store';
import { Navbar } from './components/Navbar';
function App() {
  return(
  <Container className='mb-4'>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/store" element={<Store />} />
    </Routes>
  </Container>
  )

}
 
export default App;
