import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <Redirect to="/login">
      <div>
        <Link className="p-5" to="/weather">
          Weather
        </Link>
        <Link className="p-5" to="/product">
          Product
        </Link>
        <Link className="p-5" to="/todos">
          TodoList
        </Link>
      </div>
    </Redirect>
  );
}

export default Home;
