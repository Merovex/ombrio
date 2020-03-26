import React from 'react';
import { FaRegCalendar,
         FaCog,
         FaQuestionCircle,
         FaSearch,
         FaCloudDownloadAlt
       } from 'react-icons/fa';
import { GoProject, GoFileSubmodule } from "react-icons/go";

export const Sidebar = () => (
  <nav className='sidebar expanded' data-testid='sidebar'>
    <div className="main">
      <div className='active'>
        <span><GoFileSubmodule /></span>
        <span className='sr-only'>Explorer</span>
      </div>
      <div>
        <span><FaSearch /></span>
        <span className='sr-only'>Search</span>
      </div>
      <div>
        <span><GoProject /></span>
        <span className='sr-only'>Manager</span>
      </div>
      <div>
        <span><FaRegCalendar /></span>
        <span className='sr-only'>Scheduler</span>
      </div>
      <div>
        <span><FaCloudDownloadAlt /></span>
        <span className='sr-only'>Exporter</span>
      </div>
    </div>
    <div>
      <div><span><FaQuestionCircle /></span></div>
      <div><span><FaCog /></span></div>
    </div>
  </nav>
);
