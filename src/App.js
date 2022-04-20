import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import Header from './Component/Header/Header';
import Orders from './Component/Order/Orders';
import Admin from './Component/Admin/Admin';
import Login from './Component/Login/Login';
import ManageBook from './Component/Admin/ManageBook/ManageBook';
import EditBook from './Component/Admin/EditBook/EditBook';
import AddBook from './Component/Admin/AddBook/AddBook';
import Checkout from './Component/Checkout/Checkout';
import { createContext, useState } from 'react';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';

export const userContex = createContext();
function App() {
  const [logedInUser, setLogedInUser] = useState({})
  return (
    <userContex.Provider value={[logedInUser, setLogedInUser]}>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="order" element={<PrivateRoute><Orders /></PrivateRoute>} />
          <Route path="admin" element={<PrivateRoute><Admin /></PrivateRoute>}>
            <Route path='manage-book' element={<ManageBook />} />
            <Route path='add-book' element={<AddBook />} />
            <Route path='edit-book' element={<EditBook />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path='/checkout/:_id' element={<PrivateRoute><Checkout /></PrivateRoute>} />
        </Routes>
      </BrowserRouter>
    </userContex.Provider>
  );
}

export default App;
