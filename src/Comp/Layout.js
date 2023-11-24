import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';

function Layout() {
  return (
    <div className='flex flex-col h-screen'>
      <div className='flex flex-row flex-1 overflow-hidden'>
       <Sidebar/>
        <div className='flex flex-col flex-1'>
          <Header />
          <div className='p-4 flex-1 overflow-y-auto'>
            <Outlet />
          </div>
        </div>
      </div>
      <Footer className='bg-gray-200 text-center py-2 overflow-hidden' />
    </div>
  );
}


export default Layout;


