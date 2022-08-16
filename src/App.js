import { Route, Routes } from "react-router-dom";
// import firebase from "./firebase";

// import LoginPage from "./Pages/Login";
// import { ReactDOM } from "react";
import Dashboard from "./Pages/Dashboard";
import Tours from "./Pages/Tours";
import Services from "./Pages/Services";
import Signpage from "./Pages/Signpage";
import Sign from "./Pages/Sign";
import Packageis from "./Pages/Packageis";
import Review_tour from "./Pages/Review_tour";

// import AlumniPage from "./Pages/AlumniPage";
// import Resources from "./Pages/Resources";
function App() {
  // const ref = firebase.firestore().collection("Package");
  return (
    <>
      <Routes>
        {/* <Route exact path="/" element={<LoginPage />} /> */}
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/Tours" element={<Tours />} />
        <Route exact path="/Tours/:place" element={<Packageis />} />
        <Route exact path="/Signpage" element={<Signpage />} />
        <Route exact path="/Services" element={<Services />} />
        <Route exact path="/Sign" element={<Sign />} />
        <Route exact path="/Packageis" element={<Packageis />} />
        <Route exact path="/Review_tour" element={<Review_tour />} />

        {/* {/* <Route exact path = "/Alumni" element = {<AlumniPage/>} /> */}
        {/* <Route exact path="/Resources" element={<Resources />} /> */}
      </Routes>
    </>
  );
}

export default App;
