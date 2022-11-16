import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Detail from "./componentes/detail";
import Mascotas from "./componentes/mascotas";
import NavBar from "./componentes/navbar";
const { useEffect, useState } = require("react");
function App() {
  const [mascotasDatos, setMascotas] = useState([]);
 useEffect(() => {
   const URL =
     "https://gist.githubusercontent.com/josejbocanegra/829a853c6c68880477697acd0490cecc/raw/99c31372b4d419a855e53f0e891246f313a71b20/mascotas.json";
   fetch(URL)
     .then((data) => data.json())
     .then((data) => {
       setMascotas(data);
     });
 }, []);
 return (
   <div className="App">
     <NavBar></NavBar>
     <BrowserRouter>
       <Routes>
         <Route path="/" element={<Mascotas mascotasL= {mascotasDatos} />} />
         <Route path="/mascotas" element={<Mascotas mascotasL= {mascotasDatos} />}/>
         <Route path="/mascotas/:mascotaId" element={<Detail mascotasL= {mascotasDatos}/>} />
       </Routes>
     </BrowserRouter>
   </div>
 );
}

export default App;