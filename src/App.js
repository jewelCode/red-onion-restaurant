import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home></Home>}></Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    </div>
  );
}

export default App;
