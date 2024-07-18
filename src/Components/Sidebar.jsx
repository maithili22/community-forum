import React from 'react';
import SidebarContent from './SidebarContent';
import './Sidebar.css';
import { Add } from '@mui/icons-material';
function Sidebar() {
  return (
    <div className='Sidebar'>
      <div className='btn'>
        <Add/>
      <button>create space</button>
      </div>
        <SidebarContent title="Alzheimer's Disease"/>
        <SidebarContent title="Vascular Dementia"/>
        <SidebarContent title="Lewy Body Dementia"/>
        <SidebarContent title="Frontemporal Dementia"/>
        <SidebarContent title="Parkinson's Disease "/>
        <SidebarContent title="Huntington's Disease"/>
        <SidebarContent title="Wernicke-Korsakoff "/>
        <SidebarContent title="Creutzfeldt Jakob Disease"/>
    </div>
  )
}

export default Sidebar;
