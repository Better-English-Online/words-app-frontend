import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Pages/Home/Home';
import Dictionary from './components/Pages/Dictionary/Dictionary';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path='/dict' element={<Dictionary />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
