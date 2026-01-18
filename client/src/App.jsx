import "./App.css";
import { Routes, Route } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Form from "./components/Form";
import Event from "./components/Event";
import Posts from "./components/Posts";

function App() {
  // use a good amount of components to build the app! use props as needed
  //though not required, users may want some conditional rendering to make the UI clean and uncluttered

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />}>
          <Route index element={<Posts />} />
        </Route>
        <Route path="/form" element={<Form />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
