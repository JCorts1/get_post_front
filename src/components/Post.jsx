import React, { useState } from "react";
import axios from "axios";

const Post = ({update}) => {
  const [user, setUser] = useState({
    name: "",
    age: "",
    phone: "",
    email: "",
  });

  function handleSumbit(event) {
    event.preventDefault();
    axios.post("http://127.0.0.1:3000/users", { user: user });
    update();
    
  }
  return (
    <div className="bg-gradient-to-r from-purple-800 to-white w-4/6 h-4/6 rounded-xl shadow-2xl flex flex-col items-center justify-center">
      <form onSubmit={handleSumbit} className="flex flex-col">
        <label className="text-xl text-white mb-2" htmlFor="name">
          Name:
        </label>
        <input onChange={(event)=> {
            setUser({...user, name:event.target.value})
        }} className="mb-8 shadow-xl rounded-md" id="name" type="text" />
        <label className="text-xl text-white mb-2" htmlFor="age">
          Age:
        </label>
        <input onChange={(event)=> {
            setUser({...user, age:event.target.value})
        }} className="mb-8 shadow-xl rounded-md" id="age" type="number" />
        <label className="text-xl text-white mb-2" htmlFor="phone">
          Phone number:
        </label>
        <input onChange={(event)=> {
            setUser({...user, phone:event.target.value})
        }} className="mb-8 shadow-xl rounded-md" id="phone" type="number" />
        <label className="text-xl text-white mb-2" htmlFor="email">
          E-mail:
        </label>
        <input onChange={(event)=> {
            setUser({...user, email:event.target.value})
        }} className="mb-8 shadow-xl rounded-md" type="text" />
        <button
          className="w-3/4 h-10 flex justify-center bg-[#626262] text-white text-xl rounded-md items-center shadow-purple-900"
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Post;
