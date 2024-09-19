// src/pages/Projects.jsx
import React from 'react';
import Sidenav from '../components/Sidenav';
import ProjectsTable from '../components/Tables/ProjectsTable';

const Projects = () => {
  return (
    <div className="flex h-screen bg-gray-100 min-h-screen">
    <Sidenav />
    <div className="flex-1 p-6 overflow-y-auto">
      <div className="flex flex-col mb-6">
        <h2 className="text-3xl font-bold">Projects Pagee</h2>
        <p className="mt-4 text-gray-600">Here you can manage your projects.</p>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <ProjectsTable />
      </div>
    </div>
    </div>
    );
    };

export default Projects;
