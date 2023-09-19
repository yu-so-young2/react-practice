import Home from "./pages/Home"
import About from "./pages/About"
import Counter from "./pages/Counter";
import {Routes, Route, Link} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/counter">Counter</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/counter" element={<Counter/>}></Route>

      </Routes>
    
    </div>
  );
}

export default App;
