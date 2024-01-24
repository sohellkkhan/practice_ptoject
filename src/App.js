
import { Route, Routes } from 'react-router-dom';
import './App.css';
// import Register from './component/Register';
//  import Mypage from './component/Mypage';
//  import Home from './component/Home';
//  import Login from './component/Login';
import Product from './component/Redux_Tool_KIt/Product';
import MyHome from './component/Redux_Tool_KIt/MyHome';
import Cart from './component/Redux_Tool_KIt/Cart';
import { Provider } from 'react-redux';
import store from './component/store/store'

function App() {
  return (
    <div className="App">
      
    <Provider store={store}>
      <Routes>
        {/* <Route path='/' element={<Home/>}/>
        <Route path="/register" element= { <Register/>} />
              <Route path="/login" element= { <Login/>} /> */}
            <Route path='/' element={<MyHome/>}/>
            <Route path='/product' element={<Product/>}/>
            <Route path='/cart' element={<Cart/>}/>
      </Routes>
  
      </Provider>
  
    </div>
  );
}

export default App;
