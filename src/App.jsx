import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Contacto from "./Contacto";
import Beer from "./Beer";
import {routes} from "./utils/routes";
import Navbar from "./components/Navbar";

function App() {
  return (
   <>

            <Navbar />

            <Routes>
                <Route path={routes.home} element={<Home/>} />
                <Route path={routes.contacto} element={<Contacto />} />
                <Route path={routes.beer} element={<Beer/>} />
            </Routes>
   </>
  )
}

export default App
