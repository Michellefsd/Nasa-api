import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';

function App() {
   
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        {/* <Route path="/selected-news" element={ <UserNews />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
