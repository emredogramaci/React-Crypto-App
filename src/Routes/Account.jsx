import React from "react";
import FavoriteList from "../Components/FavoriteList";
import { UserAuth } from "../Context/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";

const Account = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleSignout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (e) {
      console.log(e.message);
    }
  };

  if (user?.email) {
    return (
      <div className="max-w-[1140px] mx-auto">
        <div className="flex justify-between items-center my-12 py-8 rounded-div">
          <div>
            <h1 className="text-2xl font-bold">Account</h1>
            <div>
              <p>Welcome, {user?.email}</p>
            </div>
          </div>
          <div>
            <button
              onClick={handleSignout}
              className="border px-6 py-2 rounded-2xl shadow-xl hover:shadow-2xl"
            >
              Sign Out
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center my-12 py-8 rounded-div">
          <div className="w-full min-h-[150px]">
            <h1 className="text-2xl font-bold py-4">Favorite List</h1>
            <FavoriteList />
          </div>
        </div>
      </div>
    );
  } else <Navigate to="/signin" />;
};

export default Account;
