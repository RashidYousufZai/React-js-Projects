import { Routes, Route as ReactRoute } from "react-router-dom";
import Dashboard from "../../pages/dashboard/Dashboard";
import Inventory from "../../pages/inventory/Inventory";
import Order from "../../pages/order/Order";
import Customer from "../../pages/customer/Customer";

const Route = () => {
  return (
    <Routes>
      <ReactRoute path="/" element={<Dashboard />} />
      <ReactRoute path="/inventory" element={<Inventory />} />
      <ReactRoute path="/orders" element={<Order />} />
      <ReactRoute path="/customers" element={<Customer />} />
    </Routes>
  );
};

export default Route;
