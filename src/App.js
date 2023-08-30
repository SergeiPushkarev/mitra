import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MyNavbar from './components/UI/MyNavbar';
import About from './pages/About';
import Posts from './pages/Posts';
import UserPage from './pages/UserPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MyNavbar/>}>
          <Route index element={<Posts/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='user/:id' element={<UserPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
