import React from "react";
import SearchBar from "../Components/SearchBar";
import Trending from "../Components/Trending";

const Home = ({ coins }) => {
  return (
    <div>
      <SearchBar coins={coins} />
      <Trending />
    </div>
  );
};

export default Home;
