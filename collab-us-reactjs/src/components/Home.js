import React, { useEffect } from "react";
import cx from "classnames";
import { Switch, Route, Redirect } from "react-router-dom";

import '../resources/bootstrap-4.5.0/css/bootstrap.min.css'

function Home(props)
{
  const { path } = props.match;

   useEffect(() => {
     const userId = sessionStorage.getItem("id");
     if (userId == null)
       return props.history.replace("/login");
   });

  return (
    <div>
    </div>
   );
}

export default Home;
