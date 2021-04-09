import { createStore, applyMiddleware, compose } from "redux";
import ReduxThunk from "redux-thunk";
import { reducer } from "./Reducers";
import createSocketIoMiddleware from "redux-socket.io";
import Constants from "../Constants/appConstants/Global";
import io from "socket.io-client/dist/socket.io";

export const socket = io(`${Constants.URL}`, {
  jsonp: false,
  reconnection: false,
  reconnectionDelay: 500,
  reconnectionAttempts: Infinity,
  upgrade:false,
  transports: ['websocket'],  
});


// socket.emit("Accept",'hello')
let socketIoMiddleware = createSocketIoMiddleware(socket, "server/");
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(ReduxThunk, socketIoMiddleware))
);
export default store;
