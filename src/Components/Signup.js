import React, { useState } from "react";
//use firebase of email : sarthak01.sahu@gmail.com
export const Signup = () => {
  // for using useState to store our data
  const [userData, setUserData] = useState({
    Name: "",
    Gender: "",
    Age: "",
    Email: "",
    Phone: "",
    Password: "",
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
    const { Name, Gender, Age, Email, Phone, Password } = userData;

    // now we have to make sure empty data is not getting stored, for that we use if and else, we can also use try & catch
    if (Name && Gender && Age && Email && Phone) {
      //after fetching the data, we have to convert it into json format
      const res = fetch(
        //below is the url to the realtime database
        "https://traverse-65cd5-default-rtdb.firebaseio.com/userDataRecord.json",
        {
          //we have to define the method headers and body
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            Name,
            Gender,
            Age,
            Email,
            Phone,
            Password,
          }),
        }
      );

      if (res) {
        //below code will restore the form to empty after the data is stored
        alert("Data Stored");
        setUserData({
          Name: "",
          Gender: "",
          Age: "",
          Email: "",
          Phone: "",
          Password: "",
        });
      } else {
        alert("enter the data");
      }
    } else {
      alert("Kindly enter the data");
    }
  };

  return (
    <>
      <div>
        <div className="md:grid md:grid-cols-3 md:gap-6" id="bro">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Profile
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                This information will be displayed publicly so be careful what
                you share.
              </p>
              <br />
              <img src="../../IMAGES/profile_signup.svg" alt="" />
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST">
              <div className="shadow sm:rounded-md sm:overflow-hidden">
                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 sm:col-span-2">
                      <label
                        htmlFor="company-website"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Name
                      </label>
                      <div className="mt-1 flex  shadow-sm">
                        <input
                          type="text"
                          name="Name"
                          id="company-website"
                          className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full  sm:text-sm "
                          placeholder=" enter your name here"
                          value={userData.Name}
                          onChange={postUserData}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="gender"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Gender
                    </label>
                    <select
                      type="text"
                      name="Gender"
                      className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="enter your gender here"
                      value={userData.Gender}
                      onChange={postUserData}
                    >
                      <option></option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Prefer not to say</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 sm:col-span-2">
                      <label
                        htmlFor="company-website"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Age
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                          type="text"
                          name="Age"
                          placeholder=" enter your age here"
                          className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full   sm:text-sm border-gray-300"
                          value={userData.Age}
                          onChange={postUserData}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 sm:col-span-2">
                      <label
                        htmlFor="company-website"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email Address
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                          type="text"
                          name="Email"
                          placeholder=" enter your Email here"
                          className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full   sm:text-sm border-gray-300"
                          value={userData.Email}
                          onChange={postUserData}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col pt-4 mb-12">
                    <div className="flex relative ">
                      <span className=" inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                        <label
                          htmlFor="company-website"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Create Password
                        </label>

                        <svg
                          width="15"
                          height="15"
                          fill="currentColor"
                          viewBox="0 0 1792 1792"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M1376 768q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-320q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z"></path>
                        </svg>
                      </span>
                      <input
                        type="password"
                        name="Password"
                        id="design-login-password"
                        className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        placeholder="Password"
                        value={userData.Password}
                        onChange={postUserData}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 sm:col-span-2">
                      <label
                        htmlFor="company-website"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Phone Number
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                          type="text"
                          placeholder=" enter your phone number here"
                          name="Phone"
                          className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full   sm:text-sm border-gray-300"
                          value={userData.Phone}
                          onChange={postUserData}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={submitData}
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>

      <div className="mt-10 sm:mt-0"></div>
    </>
  );
};

export default Signup;
