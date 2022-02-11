import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Blogs from "./components/Blogs";
import Events from "./components/Events";
import Discover from "./components/Discover";

// Reducers

// const reducers = combineReducers({});
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// // const middlewares = composeEnhancers(applyMiddleware(reduxPromise));
// // store={createStore(reducers, {}, middlewares)}
function Main() {
  return (
    // <Provider>
    <BrowserRouter>
      {/* <FlashMessages messages={state.flashMessages} /> */}
      <div className="container-background">
        <Navbar />
        {/* pass the state as props to header to ensure header can still render properly */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/events" element={<Events />} />
          <Route path="/discover" element={<Discover />} />
        </Routes>
      </div>
        <Footer />
    </BrowserRouter>
    // </Provider>
  );
}

ReactDOM.render(<Main />, document.querySelector("#app"));
