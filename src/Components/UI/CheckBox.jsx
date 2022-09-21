import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export function IconCheckboxes() {
  return (
    <div>
      <Checkbox
        {...label}
        icon={<FavoriteBorder sx={{ color: "#d8213b" }} />}
        checkedIcon={<Favorite sx={{ color: "#d8213b" }} />}
      />
    </div>
  );
}

export default function Checkboxes() {
  return (
    <div>
      <Checkbox
        {...label}
        defaultChecked
        sx={{
          color: "242429",
          "&.Mui-checked": {
            color: "#242429",
          },
        }}
      />
    </div>
  );
}

export function BasicRating() {
  const [value, setValue] = React.useState(2);

  return (
    <Box
      sx={{
        "& > legend": { mt: 0 },
      }}
    >
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </Box>
  );
}
