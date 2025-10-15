import React, { useState, useEffect } from "react";
import "./PurchaseOrders.css";

const PurchaseOrders = () => {
  const [orders, setOrders] = useState([]);

  // Simulated API call (replace with backend endpoint later)
  useEffect(() => {
    const fetchOrders = async () => {
      // Example mock data
      const data = [
        {
          id: 1,
          vendor: "Tech Supplies Ltd",
          amount: 12500,
          date: "2025-10-10",
          status: "Pending",
        },
        {
          id: 2,
          vendor: "Office Depot",
          amount: 3200,
          date: "2025-10-05",
          status: "Approved",
        },
        {
          id: 3,
          vendor: "CloudSoft Pvt Ltd",
          amount: 9800,
          date: "2025-09-30",
          status: "Rejected",
        },
      ];
      setOrders(data);
    };

    fetchOrders();
  }, []);

  return (
    <div className="po-container">
      <h2>Purchase Orders</h2>

      <div className="po-card">
        <table className="po-table">
          <thead>
            <tr>
              <th>PO ID</th>
              <th>Vendor</th>
              <th>Amount ($)</th>
              <th>Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.vendor}</td>
                <td>{order.amount.toLocaleString()}</td>
                <td>{new Date(order.date).toLocaleDateString()}</td>
                <td>
                  <span className={`status ${order.status.toLowerCase()}`}>
                    {order.status}
                  </span>
                </td>
                <td>
                  {order.status === "Pending" ? (
                    <>
                      <button className="approve-btn">Approve</button>
                      <button className="reject-btn">Reject</button>
                    </>
                  ) : (
                    <span className="no-action">—</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PurchaseOrders;
