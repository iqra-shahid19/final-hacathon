// client/src/components/CreateProject.js

import React, { useState } from 'react';
import axios from 'axios';

function CreateProject() {
  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');

  const handleCreateProject = async () => {
    // Send a POST request to create a new project on the backend
  };

  return (
    <div>
      <h2>Create Project</h2>
      {/* Form for creating a new project */}
    </div>
  );
}

export default CreateProject;
