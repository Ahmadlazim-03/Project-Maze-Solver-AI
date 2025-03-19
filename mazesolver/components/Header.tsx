import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <header id="header" className="header d-flex align-items-center sticky-top bg-white shadow-md">
      <div className="container-fluid container-xl position-relative d-flex align-items-center justify-between py-3">

        <div className="logo d-flex align-items-center me-auto ml-5">
          <Image 
            src="https://upload.wikimedia.org/wikipedia/commons/6/65/Logo-Branding-UNAIR-biru.png" 
            alt="Logo UNAIR" 
            width={35} 
            height={35} 
            priority
          />
          <div className="hidden md:block ml-3 text-lg font-bold">
            <h1>Universitas Airlangga</h1>
          </div>
        </div>

        <nav id="navmenu" className="navmenu">
          <ul className="flex space-x-6 text-sm md:text-base">
            <li><a href="#hero" className="active">Home</a></li>
            <li><a href="#about">About</a></li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>

        <a 
          className="btn-getstarted px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition" 
          href="/projectuts.pdf" 
          download="Project UTS AI Kelompok 1.pdf"
        >
          Laporan
        </a>

      </div>
    </header>
  );
};

export default Header;