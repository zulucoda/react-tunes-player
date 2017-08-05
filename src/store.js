/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2017/08/04.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */
import { applyMiddleware, createStore, compose } from "redux";
import reducers from "./reducers";
import ReduxThunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  {},
  composeEnhancers(applyMiddleware(ReduxThunk))
);

export default store;
