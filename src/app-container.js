/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2017/08/04.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */
"use strict";
import { connect } from "react-redux";
import AppView from "./app-view";

const mapStateToProps = state => {
  return {};
};

const AppContainer = connect(mapStateToProps)(AppView);

export default AppContainer;