import React, { useEffect } from "react";
import cx from "classnames";
import { usePost } from "seed/api";

function Logout(props)
{
  const [logout, onLogout] = usePost("/auth/logout", {
    onCompleted: (data) =>
    {
      sessionStorage.clear();
      props.history.replace("/");
    }
  });

  useEffect(() => logout(), []);

  return (
    <div></div>
  );
}

export default Logout;
