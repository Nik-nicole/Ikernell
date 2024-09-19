import React from "react";
import Sidebar from "../components/Sidenav";


function Home() {
  return (
    <div className=" flex-1 flex flex-col overflow-hidden">
        <Sidebar/>
      <h1 className="text-3xl font-bold mt-10 ml-10 block">Home page</h1>
    </div>
  )
}

export default Home
