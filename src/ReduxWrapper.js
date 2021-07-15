import React from "react";
import { Provider } from "react-redux";
import { Store } from "./Redux/Store";
import Router from "./Router";
export default function ReduxWrapper() {
      return (
            <Provider store={Store}>
                  <Router />
            </Provider>
      );
}
