import React from "react";
import "./searchcard.css";
import SearchIcon from "@mui/icons-material/Search";
import { useShop } from "../../../Store/AuthContext";

function SearchCard() {
  const { input, setInput } = useShop();
  console.log(input);
  return (
    <div className="search-bar">
      <SearchIcon />
      <input
        type="search"
        placeholder="Enter A Brand:"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
}

export default SearchCard;
