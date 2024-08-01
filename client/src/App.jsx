import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import News from "./Components/News";
import Navigation from "./Components/Navigation";

function App() {
  return (
    <>
      <BrowserRouter>
      <Navigation/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/News" element={<News />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
