import React from "react";
import { Tile } from "../tile/Tile";


export const TileList = ({objArr}) => {

  return (
    <div>
      {objArr.map((value, i) => <Tile key={i} value={value} />)}
    </div>
  );
};
