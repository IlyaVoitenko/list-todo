import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const BtnBack = () => {
  return (
    <Link to="/">
      <Button>Go back</Button>
    </Link>
  );
};
export default BtnBack;
