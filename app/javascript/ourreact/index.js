import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import reduxPromise from "redux-promise";

// Components
import Header from "./components/Header";
import Blogs from "./components/Blogs";
import Events from "./components/Events";
import Discover from "./components/Discover";

// Reducers

const reducers = combineReducers({});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = composeEnhancers(applyMiddleware(reduxPromise));

function Main() {
  return (
    <Provider store={createStore(reducers, {}, middlewares)}>
      <BrowserRouter>
        <FlashMessages messages={state.flashMessages} />
        <Header />
        {/* pass the state as props to header to ensure header can still render properly */}
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/events" element={<Events />} />
          <Route path="/discover" element={<Discover />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

ReactDOM.render(<Main />, document.querySelector("#app"));
