import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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

// const reducers = combineReducers({
//   articles: articlesReducer
// });
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const middlewares = composeEnhancers(applyMiddleware(reduxPromise));

// function App() {
//   return (
//     <div>
//       <Navbar />
//       <Home />
//       <About />
//       <Blogs />
//       <Events />
//     </div>
//   );
// }

function Main() {
  return (
    // <Provider store={createStore(reducers)}>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="blog/:category" element={<BlogCategory />} />
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
