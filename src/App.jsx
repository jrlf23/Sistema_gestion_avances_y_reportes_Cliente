import React from 'react';
import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';
import Header_customer from './Componente_comun/Header_customer';
import { Signup_customer } from './Signup_customer/Customer_signup';
import { Login_customer } from './Login_customer/Customer_login';

// Layout para clientes
const CustomerLayout = () => (
  <>
    <Header_customer />
    <Outlet />
  </>
);

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<CustomerLayout />}>
          <Route path="/" element={<Signup_customer />} />
          <Route path="/Login_customer" element={<Login_customer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
