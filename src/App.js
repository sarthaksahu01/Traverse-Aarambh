import { Route, Routes } from "react-router-dom";
// import LoginPage from "./Pages/Login";
// import { ReactDOM } from "react";
import Dashboard from "./Pages/Dashboard";
import Tours from "./Pages/Tours";
import Services from "./Pages/Services";
import Signpage from "./Pages/Signpage";
// import AlumniPage from "./Pages/AlumniPage";
// import Resources from "./Pages/Resources";
function App() {
  return (
    <>
      <Routes>
        {/* <Route exact path="/" element={<LoginPage />} /> */}
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/Tours" element={<Tours />} />
        <Route exact path="/Signpage" element={<Signpage />} />
        <Route exact path="/Services" element={<Services />} />
        {/* {/* <Route exact path = "/Alumni" element = {<AlumniPage/>} /> */}
        {/* <Route exact path="/Resources" element={<Resources />} /> */}
      </Routes>
    </>
  );
}

export default App;
