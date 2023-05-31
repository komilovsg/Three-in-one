import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { userss } from "./data";

export default function View({ userss }) {
  let { id } = useParams();
  console.log("iojoijoi");
  console.log(userss);
  const [post, setPost] = useState({});
  useEffect(() => {
    setPost(userss.find((user) => user.id == id));
  }, [id]);


  return (
    <div className="flex justify-center items-center mt-10">
      <div className="border-2 w-1/6 border-black text-center rounded-2xl pt-3 bg-slate-400 hover:scale-105 transition-all shadow-2xl shadow-slate-600">
      <p className="flex justify-center items-center "><img className="border-2 border-slate-500 rounded-lg"  src={post.img} alt="" /></p>
      <p className="mt-5">{post.fullName}</p>
      <p className="mt-2">{post.skills}</p>
      <p className="mt-2">{post.text}</p>
      <p className="my-2 ">{post.age}</p>
             
    </div>
    </div>
  );
}
