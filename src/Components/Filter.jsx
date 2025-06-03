import React from "react";

function Filter({ setFilterTitle, setFilterRating }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Filtrer par titre"
        onChange={(e) => setFilterTitle(e.target.value)}
      />
      <input
        type="number"
        min="0"
        max="5"
        placeholder="Note minimale"
        onChange={(e) => setFilterRating(Number(e.target.value))}
      />
    </div>
  );
}

export default Filter;