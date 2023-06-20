import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MyNavbar from './components/UI/MyNavbar';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MyNavbar/>}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
