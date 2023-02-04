import React, { useEffect, useState } from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from "../Firebase";
import { UserAuth } from "../Context/AuthContext";

const FavoriteList = () => {
  const [coins, setCoins] = useState([]);
  const { user } = UserAuth();

  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setCoins(doc.data()?.favList);
    });
  }, [user?.email]);

  const coinPath = doc(db, "users", `${user?.email}`);
  const deleteCoin = async (passedid) => {
    try {
      const result = coins.filter((item) => item.id !== passedid);
      await updateDoc(coinPath, {
        favList: result,
      });
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div>
      {coins?.length === 0 ? (
        <p>
          You don't have any coins saved. Please save a coin to add it to your
          favorite list. <Link to="/">Click here to search coins.</Link>
        </p>
      ) : (
        <table className="w-full border-collapse text-center">
          <thead>
            <tr className="border-b">
              <th className="px-4">Rank #</th>
              <th className="text-left">Coin</th>
              <th>Price Change 24h</th>
              <th className="text-left">Price</th>
              <th className="text-left">Remove</th>
            </tr>
          </thead>
          <tbody>
            {coins?.map((coin) => (
              <tr key={coin.id} className="h-[60px] overflow-hidden">
                <td>{coin?.rank}</td>
                <td>
                  <Link to={`/coin/${coin.id}`}>
                    <div className="flex items-center">
                      <img src={coin?.image} className="w-8 mr-4" alt="/" />
                      <div>
                        <p className="hidden sm:table-cell">{coin?.name}</p>
                        <p className="text-gray-500 text-left text-sm">
                          {coin?.symbol.toUpperCase()}
                        </p>
                      </div>
                    </div>
                  </Link>
                </td>
                <td>
                  {coin.price_change > 0 ? (
                    <p className="text-green-600">
                      {coin.price_change.toFixed(2)}
                    </p>
                  ) : (
                    <p className="text-red-600">
                      {coin.price_change.toFixed(2)}
                    </p>
                  )}
                </td>
                <td className="text-left">${coin?.price.toLocaleString()}</td>
                <td className="pl-5 text-xl">
                  <RiDeleteBin6Fill
                    onClick={() => deleteCoin(coin.id)}
                    className="cursor-pointer"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default FavoriteList;
