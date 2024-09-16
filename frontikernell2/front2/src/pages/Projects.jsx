import React from 'react';
import Sidenav from '../components/Sidenav';
import FormProject from '../components/forms/FormProject';


const Projects = () => {
  return (
    <div className="flex flex-row bg-gray-100 ">
      <Sidenav />
      <div className="flex-1 p-10">
        <h2 className="text-3xl font-bold">Projects Page</h2>
        <p className="mt-4 text-gray-600">Here you can manage your projects.</p>

        <FormProject />
        
      </div>
    </div>
  );
};

export default Projects;
