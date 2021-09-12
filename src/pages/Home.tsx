import React from "react";
import { RouteComponentProps } from "react-router";
import SearchInput from "../components/Inputs/SearchInput";
import { useTextField } from "../hooks/common/useTextField";
import "../scss/Home.scss";

const Home: React.FC<RouteComponentProps> = (props) => {
  const [searchText, setSearchText] = useTextField("");
  const handleSubmit = () => {
    props.history.push(`/search/${searchText}`);
  };
  return (
    <div className="home-wrapper">
      <div className="search-wrapper">
        <h2>DOTA stats playground</h2>
        <p>Find a player</p>
        <SearchInput
          className="search-input"
          placeholder="Enter a player name"
          variant="outlined"
          value={searchText}
          onChange={setSearchText}
          onSearchIconClicked={handleSubmit}
          onEnterPressed={handleSubmit}
        />
      </div>
    </div>
  );
};
export default Home;
