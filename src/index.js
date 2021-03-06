import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import configureStore from "./redux/store";
import rootSaga from "./redux/sagas";

// import { store } from './redux/store';
// import { FirebaseProvider } from './firebase';

import App from "./app/App";
import * as serviceWorker from "./serviceWorker";

const store = configureStore();
store.runSaga(rootSaga);

function Root() {
  return (
    // <FirebaseProvider>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
    // </FirebaseProvider>
  );
}

ReactDOM.render(<Root />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
