import React from "react";
import Container from "./Container";

const Item = ({ searchTerm }) => {
  return (
    <div>
      <h2 data-testid={`${searchTerm}Header`}>{searchTerm} pictures</h2>
      <Container searchTerm={searchTerm} />
    </div>
  );
};

export default Item;
