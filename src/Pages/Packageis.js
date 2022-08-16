import { Nav } from "../Components/Nav";
import { Package } from "../Components/Package";
import { Footer } from "../Components/Footer";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
// import firebase from "firebase/firebase-app";

const Packageis = () => {
  const { place } = useParams();
  const places = [
    { place: "Kerela", des: "this is haeaven " },
    { place: "Karnataka", des: "this is haeaven 23 " },
    { place: "Goa", des: "this is haeaven 32" },
    // { place: "Karnataka", des: "this is haeaven 2" },
  ];
  console.log(place);
  useEffect(() => {
    const found = places.find((element) => (element.place = place));

    console.log(found);
  }, []);

  // var ref = firebase.database().ref("package/Kerela");
  // ref.once("value").then(function (snapshot) {
  //   console.log(snapshot.child("place1").val());
  // });

  return (
    <>
      <Nav />
      <Package name={place} />
      <Footer />
    </>
  );
};

export default Packageis;
