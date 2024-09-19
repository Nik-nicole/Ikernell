import React from 'react';
import Sidenav from '../components/Sidenav';
import Chatform from '../components/forms/Chatform'


const Projects = () => {
  return (
    <div className="flex flex-row bg-gray-100  ">
      <Sidenav />
      <div className="flex-1 p-10">
        <h2 className="text-3xl font-bold">Chat ia</h2>
        <p className="mt-4 text-gray-600">Here you can chat with our IA </p>
        <Chatform />
        
      </div>
    </div>
  );
};

export default Projects;
