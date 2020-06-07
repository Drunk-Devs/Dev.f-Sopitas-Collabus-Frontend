/*
__Seed builder__v0.1.8
  AUTO_GENERATED (Read only)
  Modify via builder
*/

import { combineReducers } from "redux";

import Businesses from "seed/reducers/businesses";
import Categories from "seed/reducers/categories";
import Stats from "seed/reducers/stats";
import Users from "seed/reducers/users";
import UserTypes from "seed/reducers/userTypes";
import Auth from "seed/reducers/helpers/auth";

const reducers = {
  auth: new Auth().reducer,
  businesses: new Businesses().reducer,
  categories: new Categories().reducer,
  stats: new Stats().reducer,
  users: new Users().reducer,
  userTypes: new UserTypes().reducer,
} ;

export default combineReducers(reducers); 