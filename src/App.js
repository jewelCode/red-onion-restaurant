import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import NotFound from './components/NotFound/NotFound';
import BreakFast from './components/Home/Food/BreakFast/BreakFast';
import Footer from './components/Shared/Footer/Footer';
import Main from './components/Shared/Main/Main';
import Header from './components/Shared/Header/Header';
import Food from './components/Home/Food/Food/Food';
import Lunch from './components/Home/Food/Lunch/Lunch';
import Dinner from './components/Home/Food/Dinner/Dinner';

function App() {
  return (
    <div>
    <Header></Header>
    <Main></Main>
    <Food></Food>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home></Home>}></Route>
            <Route path="/breakfast" element={<BreakFast></BreakFast>}></Route>
            <Route path="/lunch" element={<Lunch></Lunch>}></Route>
            <Route path="/dinner" element={<Dinner></Dinner>}></Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    <Footer></Footer>
    </div>
  );
}

export default App;
