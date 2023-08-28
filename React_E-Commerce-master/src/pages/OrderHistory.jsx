import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import "react-loading-skeleton/dist/skeleton.css";

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    const fetchOrderHistory = async () => {
      setLoading(true);
      try {
        const response = await fetch("your-backend-api-url"); // Replace with your API endpoint
        if (componentMounted) {
          setOrders(await response.json());
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching order history:", error);
      }

      return () => {
        componentMounted = false;
      };
    };

    fetchOrderHistory();
  }, []);

  const Loading = () => {
    return (
      <div className="col-12 py-5 text-center">
        <Skeleton height={40} width={560} />
        <Skeleton height={592} width={300} count={5} />
      </div>
    );
  };

  const ShowOrders = () => {
    return (
      <>
        {orders.map((order) => (
          <div key={order.id} className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
            <div className="card text-center h-100">
              {/* Display order information here */}
              <div className="card-body">
                <h5 className="card-title">Order ID: {order.id}</h5>
                {/* Display other order details */}
              </div>
              <div className="card-body">
                <Link to={`/order/${order.id}`} className="btn btn-dark m-1">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </>
    );
  };

  return (
    <div className="container my-3 py-3">
      <div className="row">
        <div className="col-12">
          <h2 className="display-5 text-center">Order History</h2>
          <hr />
        </div>
      </div>
      <div className="row justify-content-center">
        {loading ? <Loading /> : <ShowOrders />}
      </div>
    </div>
  );
};

export default OrderHistory;