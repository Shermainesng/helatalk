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
import BlogCategory from "./components/BlogCategory";
import Events from "./components/Events";
import Discover from "./components/Discover";
import Header from "./components/Header";

// Reducers

// const reducers = combineReducers({});
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// // const middlewares = composeEnhancers(applyMiddleware(reduxPromise));
// // store={createStore(reducers, {}, middlewares)}

function App() {
  return (
    <div>
      <Home />
      <About />
      <Blogs />
      <Events />
    </div>
  );
}

function Main() {
  return (
    // <Provider>
    <BrowserRouter>
      <div className="container-background">
        <Navbar />
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<About />} />
          <Route path="/#blog" element={<Blogs />} />
          <Route path="blog/:category" element={<BlogCategory />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/events" element={<Events />} />
          {/* <Route path="#about" element={<App />}/>
          <Route path="#blog" element={<App />}/> */}
          {/* <Route path="/events" element={<App />} onEnter={scrollToId("events")} /> */}
          {/* <Route path="#events" element={<App />}/>
          // <Route path="/discover" element={<Discover />} /> */}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
    // </Provider>
  );
}

ReactDOM.render(<Main />, document.querySelector("#app"));
