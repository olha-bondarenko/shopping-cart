import { Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { ShoppingCartProvider } from './context/ShoppingCartContext';
import Home from './containers/Home';
import Store from './containers/Store';
import About from './containers/About';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <ShoppingCartProvider>
    <Navbar />
    <Container className='mb-4'>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/store' element={<Store />}/>
        <Route path='/about' element={<About />}/>
      </Routes>
    </Container>
    </ShoppingCartProvider>
  );
}

export default App;
