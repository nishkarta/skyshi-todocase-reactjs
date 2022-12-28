import { Route, Routes } from 'react-router-dom';
import NavbarEl from './components/atoms/NavbarEl';
import Dashboard from './pages/Dashboard';
import ItemListsPage from './pages/ItemListsPage';
import './styles/App.css';


function App() {
  return (
    <div className='app-container'>
      <div >
        <NavbarEl />
      </div>
      <div className="board-container">
        <Routes>
          <Route exact path='/' element={<Dashboard />} />
          <Route exact path='/todos/:id' element={<ItemListsPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
