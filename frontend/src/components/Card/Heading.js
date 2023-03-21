import React from "react";
import { Link, Outlet } from "react-router-dom";

function Heading() {
  return (
    <div className="blogs">
      <div className="blogsNav">
        <Link to="/blogs/search"> Search </Link>
        <Link to="/blogs"> List </Link>
        <Link to="/blogs/create"> Add </Link>
      </div>

      <Outlet />
    </div>
  );
}

export default Heading;