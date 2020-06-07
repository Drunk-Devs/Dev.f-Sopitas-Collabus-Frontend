/*
__Seed builder__v0.1.8
  AUTO_GENERATED (Read only)
  Modify via builder
*/
import Actions from "seed/actions/userTypes";

import Reducer from "seed/helpers/reducer";

class _UserTypes extends Reducer
{
  constructor()
  {
    super(new Actions());
  }

  reducer = (state, action) =>
  {
    return this.baseReducer(state, action);
  };
}

export default _UserTypes;