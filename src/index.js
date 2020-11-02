import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { applyMiddleware, createStore } from "redux";
import rootReducer, { rootSaga } from "./modules";
import { Provider } from "react-redux";
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import createSagaMiddleWare from 'redux-saga';

const customHistory = createBrowserHistory();
const sagaMiddleware = createSagaMiddleWare({
  context : {
    history : customHistory
  }
});

const store = createStore(
  rootReducer,
  // logger 를 사용하는 경우 logger가 가장 마지막에 사용해야함
  composeWithDevTools(applyMiddleware(
    sagaMiddleware,
    ReduxThunk.withExtraArgument({ history : customHistory }),
    logger))
); // 여러개의 미들웨어를 적용 할 수 있습니다.

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Router history={customHistory}>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
