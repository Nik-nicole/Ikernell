import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout"
import Home from "./pages/Home";
import Members from "./pages/Members";


function App(){
  return(
    
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="members" element={<Members/>}/>
      </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;