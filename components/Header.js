import { Button } from "@material-tailwind/react"
import React from "react";
import { DocumentTextIcon, MenuIcon, SearchIcon} from '@heroicons/react/solid';
import Image from "next/image";
import {useState} from 'react';
import {useRef, useEffect } from 'react';
import AppsIcon from '@mui/icons-material/Apps';
import DescriptionIcon from '@mui/icons-material/Description';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';



function Header() { //renders the header section of the Google Docs clone

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAppsMenuOpen, setIsAppsMenuOpen] = useState(false); //These variables manage the state of whether the menu and apps menu are open or closed
  const menuRef = useRef(null);
  const appsMenuRef = useRef(null); //These references are used to detect clicks outside of the menus

  useEffect(() => { //hook is used to add an event listener to the document for detecting clicks outside of the menus
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
      if (appsMenuRef.current && !appsMenuRef.current.contains(event.target)) {
        setIsAppsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleAppsMenu = () => {
    setIsAppsMenuOpen(!isAppsMenuOpen);
  };

  return (
    <div className="shadow-lg">
    <header className="flex items-center justify-between p-2 bg-white dark:bg-dark-extra dark:text-gray-200">
      <div className="flex items-center space-x-4">
      <button
      color="white"
      className="focus:outline-none"
      ripple="dark"     
      >
          
          <MenuIcon className="h-6 w-10 text-blue-gray-700 " />
        </button>
        <div className="flex items-center space-x-2">
          <DescriptionIcon className="h-12 w-12 text-blue-500" />
          <span className="text-lg font-normal"> Docs</span>
        </div>
        <div className="flex-grow">
          <button className="relative flex items-center focus-within:text-gray-600 focus-within:shadow-md">
            <SearchIcon className="h-6 w-6 text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2" />
          
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-200 hover:bg-gray-200 focus:bg-white text-black pl-11 pr-5 py-2 rounded-lg transition-colors duration-300 focus:outline-none "
          />
          </button>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative" ref={menuRef}>
        <button className="focus:outline-none" onClick={toggleMenu}>
              <AppsIcon className="h-10 w-10 text-gray-600" />
            </button>
            {isMenuOpen && (
              <div className="absolute -left-32 top-1/2 transform -translate-y-1/2">
                <ul className="bg-white rounded-lg py-2 px-4">
                  <li className="py-1" onClick={toggleAppsMenu}>
                    Google Apps
                 </li>
                    
                </ul>
              </div>
            )}
            
          </div>
        
        <div className="relative">
        <AccountCircleIcon className="cursor-pointer h-12 w-12 text-purple-400 " />
          
        </div>
      </div>
    </header>
    </div>
  );
}

export default Header;