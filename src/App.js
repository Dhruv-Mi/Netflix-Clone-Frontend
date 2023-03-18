import { Home_start } from "./modules/home-enter/Home_start";
import { Sign_in } from "./modules/sign-in/Sign_in";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Registration } from "./modules/registration/Registration";
import { Home } from "./modules/home/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home_start />} />
          <Route path="/login" element={<Sign_in />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
