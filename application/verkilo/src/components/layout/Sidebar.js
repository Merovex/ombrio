import React from 'react';
import { FaRegCalendar, FaSearch, FaCloudDownloadAlt } from 'react-icons/fa';
import { GoProject, GoFileSubmodule } from "react-icons/go";

export const Sidebar = () => (
  <section className='sidebar' data-testid='sidebar'>
    <ul className='sidebar__generic'>
      <li>
        <span><GoFileSubmodule /></span>
        <span>Explorer</span></li>
      <li>
        <span><FaSearch /></span>
        <span>Search</span></li>
      <li>
        <span><GoProject /></span>
        <span>Manager</span></li>
      <li>
        <span><FaRegCalendar /></span>
        <span>Scheduler</span></li>
      <li>
        <span><FaCloudDownloadAlt /></span>
        <span>Exporter</span>
      </li>
    </ul>
  </section>
);