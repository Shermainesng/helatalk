import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Blogs from "./components/Blogs";
import BlogCategory from "./components/BlogCategory";
import Events from "./components/Events";
import Discover from "./components/Discover";
import Carousel from "./components/Carousel";

function Main() {
  return (
    // <Provider store={createStore(reducers)}>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="blogs/:category" element={<BlogCategory />} />
        {/* <Route path="/events" element={<App />} onEnter={scrollToId("events")} /> */}
        <Route path="/events" element={<Events />} />
        <Route path="/discover" element={<Discover />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    // </Provider>
  );
}

ReactDOM.render(<Main />, document.querySelector("#app"));
