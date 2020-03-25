import React from 'react';
import { FaRegCalendar,
         FaCog,
         FaQuestionCircle,
         FaSearch,
         FaCloudDownloadAlt
       } from 'react-icons/fa';
import { GoProject, GoFileSubmodule } from "react-icons/go";

export const Sidebar = () => (
  <nav className='sidebar' data-testid='sidebar'>
    <ul className='sidebar__generic'>
      <li>
        <span><GoFileSubmodule /></span>
        <span className='sr-only'>Explorer</span>
      </li>
      <li>
        <span><FaSearch /></span>
        <span className='sr-only'>Search</span>
      </li>
      <li>
        <span><GoProject /></span>
        <span className='sr-only'>Manager</span>
      </li>
      <li>
        <span><FaRegCalendar /></span>
        <span className='sr-only'>Scheduler</span>
      </li>
      <li>
        <span><FaCloudDownloadAlt /></span>
        <span className='sr-only'>Exporter</span>
      </li>
    </ul>
    <ul>
      <li><span><FaQuestionCircle /></span></li>
      <li><span><FaCog /></span></li>
    </ul>
  </nav>
);
