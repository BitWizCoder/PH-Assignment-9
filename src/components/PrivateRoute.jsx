/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { DataContext } from "../Context/DataContext";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(DataContext);

  if (!user) {
    // You can replace "/login" with the path to your login page.
    return <Navigate to="/login" />;
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center mt-20">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return children;
};

export default PrivateRoute;
