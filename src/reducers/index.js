// This is the root reducer

import { combineReducers } from "redux";
import location from "./location";
import theme from "./theme";

export default combineReducers({ location, theme });
