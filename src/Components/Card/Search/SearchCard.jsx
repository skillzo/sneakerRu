import React from "react";
import "./searchcard.css";
import SearchIcon from "@mui/icons-material/Search";
import { useShop } from "../../../Store/AuthContext";

function SearchCard() {
  const { input, setInput } = useShop();
  return (
    <div className="search-bar">
      <SearchIcon />
      <input
        type="search"
        placeholder="Enter a brand, name, price"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
}

export default SearchCard;
