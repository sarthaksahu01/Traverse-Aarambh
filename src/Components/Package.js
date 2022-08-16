import { useState, useEffect } from "react";
// import { getDatabase } from "firebase/database";

// // const database = getDatabase();
// import db from "../firebase";
export const Package = (props) => {
  const [userData, setUserData] = useState({
    Passengers: "",
    Name: "",
    Transport: "",
    Place: "",
  });
  //solving the data
  let name, value;
  //every element is given "name" same as that of useState var
  // below function is helpful to take input from user and assign it to the 'value'
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUserData({ ...userData, [name]: value });
  };

  //using the firebase
  const submitData = async (event) => {
    await event.preventDefault();
    const { Passengers, Name, Transport, Place } = userData;

    // now we have to make sure empty data is not getting stored, for that we use if and else, we can also use try & catch
    if (Passengers && Name && Transport && Place) {
      //after fetching the data, we have to convert it into json format
      const res = fetch(
        //below is the url to the realtime database
        "https://traverse-65cd5-default-rtdb.firebaseio.com/bookingDataRecord.json",
        {
          //we have to define the method headers and body
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            Passengers,
            Name,
            Transport,
            Place,
          }),
        }
      );

      // const [packs, setPacks] = useState([]);
      // useEffect(() => {
      //   db.collection("package").onSnapshot(
      //     (snapshot) => setPacks(snapshot.docs.map((doc) => doc.data())) //this is document
      //   );
      // }, []);

      if (res) {
        //below code will restore the form to empty after the data is stored
        alert("Data Stored");
        setUserData({
          Passengers: "",
          Name: "",
          Transport: "",
          Place: "",
        });
      } else {
        alert("enter the data");
      }
    } else {
      alert("Kindly enter the data");
    }
  };

  return (
    <div className="flex flex-wrap w-full">
      <div className="flex flex-col w-full md:w-1/2">
        <div className="flex justify-center pt-12 md:justify-start md:pl-12 md:-mb-24"></div>
        <div className="flex flex-col justify-center px-8 pt-8 my-auto md:justify-start md:pt-0 md:px-24 lg:px-32">
          <p className="text-3xl text-center">Welcome to {props.name} tours</p>
          <form className="flex flex-col pt-3 md:pt-8">
            <div className="flex flex-col pt-4">
              <div className="flex relative ">
                <span className=" inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                  <b> Enter Number Of Passengers:</b>
                  <svg
                    width="15"
                    height="15"
                    fill="currentColor"
                    viewBox=""
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z"></path>
                  </svg>
                </span>
                <input
                  name="Passengers"
                  type="text"
                  id="passengers"
                  className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Number of passengers"
                  value={userData.Passengers}
                  onChange={postUserData}
                />
              </div>
            </div>
            <br></br>
            <br></br>
            <div className="flex flex-col pt-4 mb-12">
              <div className="flex relative ">
                <span className=" inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                  <b>Enter Your Name:</b>
                  <svg
                    width="15"
                    height="15"
                    fill="currentColor"
                    viewBox=""
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1376 768q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-320q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z"></path>
                  </svg>
                </span>
                <input
                  name="Name"
                  type="NAME"
                  id="design-login-password"
                  className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="ABC"
                  value={userData.Name}
                  onChange={postUserData}
                />
              </div>
            </div>

            <div className="flex flex-col pt-4 mb-12">
              <div className="flex relative ">
                <span className=" inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                  <b>Places Of Visit:</b>
                  <svg
                    width="15"
                    height="15"
                    fill="currentColor"
                    viewBox=""
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1376 768q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-320q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z"></path>
                  </svg>
                </span>
                {/* {packs.map(
                  ({
                    place1,
                    place2,
                    place3,
                    place4,
                    place5,
                    place6,
                    place7,
                  }) => ( */}
                <select
                  type="text"
                  name="Place"
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="enter your gender here"
                  value={userData.Place}
                  onChange={postUserData}
                >
                  <option value="place1"></option>
                  <option value="place1">place1</option>
                  <option value="place2">place2</option>
                </select>
                {/* ) )} */}
              </div>
            </div>

            <div>
              Mode Of Transportation
              <select
                type="text"
                name="Transport"
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="enter your gender here"
                value={userData.Transport}
                onChange={postUserData}
              >
                <option value=""></option>
                <option value="Bus">Bus</option>
                <option value="Train">Train</option>
                <option value="Flight">Flight</option>
              </select>
            </div>

            <br></br>
            <br></br>

            <button
              type="submit"
              className="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-deep-purple-400 shadow-md hover:text-black hover:bg-white focus:outline-none focus:ring-2"
              onClick={submitData}
            >
              <span className="w-full">Submit</span>
            </button>
          </form>
        </div>
      </div>
      <div className="w-1/2 shadow-2xl">
        <img
          className="hidden object-cover w-full h-max md:block"
          src="../../IMAGES/signIn_image.svg"
          alt="#"
          id="signIn_image"
        />
      </div>
    </div>
  );
};

export default Package;
