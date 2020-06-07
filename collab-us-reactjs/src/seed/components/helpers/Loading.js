/*
__Seed builder__v0.1.8
  (Read_only) Builder helper
*/

import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";


class Loading extends React.Component
{
  render()
  {
    return (
      <div className={styles.module}>
        <CircularProgress className={styles.loading}/>
      </div>
    );
  }
}

export default Loading;
