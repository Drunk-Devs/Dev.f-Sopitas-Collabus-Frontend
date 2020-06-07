/*
__Seed builder__v0.1.8
  AUTO_GENERATED (Read only)
  Modify via builder
*/

import * as Util from "seed/util";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import _BusinessActions from "seed/actions/businesses";
import _CategoryActions from "seed/actions/categories";
import _StatActions from "seed/actions/stats";
import _UserActions from "seed/actions/users";
import _UserTypeActions from "seed/actions/userTypes";
import AuthActions from "seed/actions/helpers/auth";
import FileActions from "seed/helpers/files";
const businesses = new _BusinessActions();
const categories = new _CategoryActions();
const stats = new _StatActions();
const users = new _UserActions();
const userTypes = new _UserTypeActions();
const auth = new AuthActions();
const files = new FileActions();

const actions = [
  {
    className: _BusinessActions,
    object: businesses
  },
  {
    className: _CategoryActions,
    object: categories
  },
  {
    className: _StatActions,
    object: stats
  },
  {
    className: _UserActions,
    object: users
  },
  {
    className: _UserTypeActions,
    object: userTypes
  },
  {
    className: AuthActions,
    object: auth
  },
  {
    className: FileActions,
    object: files
  },
];

const stateToProps = (state, props) => ({
  businesses: state.businesses.dataset,
  categories: state.categories.dataset,
  stats: state.stats.dataset,
  users: state.users.dataset,
  userTypes: state.userTypes.dataset,
});

const dispToProps = (disp) => {
  let res = {};
  for (let action of actions){
    let methods = Object.getOwnPropertyNames(action.className.prototype);
    for (let method of methods)
      if (method != "constructor")
        res[method] = (...args) => disp(action.object[method](...args));
  }
  return res;
};

const mergeProps = (states, disps, props) =>
  Object.assign({}, states, disps, props);

const redux = (component) =>
  withRouter(connect(
    stateToProps,
    dispToProps,
    mergeProps
  )(component));

export default redux;


