import "./App.css";
import { Routes, Route } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";

//TODO: set up routing system and import components
// remember to have a component for your root route too ("/"")

function App() {
  return (
    // use a good amount of components to build the app! use props as needed
    //though not required, users may want some conditional rendering to make the UI clean and uncluttered
    <>
      <Header />;<h1>main page</h1>
      {/* routing system goes here */}
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/posts" element={<Posts />}></Route>
        <Route path="/form" element={<Form />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
