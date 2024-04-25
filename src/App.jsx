import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Post from "./components/Post";

const App = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    updatingUser();
    console.log(user.data);
  }, []);

  function updatingUser() {
    axios.get("http://127.0.0.1:3000/users").then(function (response) {
      setUser(response.data);
      console.log(response);
    });
  }

  return (
    <div className="w-screen h-screen bg-gradient-to-r from-blue-950 to-purple-800 flex">
      <div className="w-2/4 h-full grid grid-cols-3 gap-4 items-center justify-center border-r-2">
        {user.map((user) => (
          <div className=" bg-gradient-to-r from-white to-purple-800 w-52 h-60 rounded-xl shadow-2xl flex flex-col items-center justify-center">
            <div className="">
              <h2 className="text-2xl text-purple-900 ">User Name:</h2>
              <h3 className="text-xl">{user.name}</h3>
            </div>
            <div className="mb-1">
              <h2 className="text-xl text-purple-900 ">Age:</h2>
              <h3 className="text-lg">{user.age}</h3>
            </div>
            <div className="mb-1">
              <h2 className="text-xl text-purple-900 ">Phone:</h2>
              <h3 className="text-lg">{user.phone}</h3>
            </div>
            <div className="mb-1">
              <h2 className="text-xl text-purple-900 ">Email:</h2>
              <h3 className="text-lg">{user.email}</h3>
            </div>
          </div>
        ))}
      </div>
      <div className="w-2/4 h-full flex items-center justify-center border-r-2">
        <Post update={updatingUser} />
      </div>
    </div>
  );
};

export default App;
