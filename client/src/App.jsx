import "./App.css";
import { Routes, Route } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Form from "./components/Form";
import Posts from "./components/Posts ";

function App() {
  // use a good amount of components to build the app! use props as needed
  //though not required, users may want some conditional rendering to make the UI clean and uncluttered

  return (
    <>
      <Header />
      <h1>main page</h1>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/posts" element={<Posts />}></Route>
        <Route path="/form" element={<Form />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
