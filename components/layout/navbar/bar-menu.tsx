'use client';
import DropdownMenu from 'components/menus/iphoneMenu';
import { useRef, useState } from 'react';

import React from 'react';

interface MenuLinkProps {
  href: string;
  text: string;
}

const MenuLink: React.FC<MenuLinkProps> = ({ href, text }) => (
  <span className="body-2-light mr-6 first:pl-6 last:mr-8">
    <a
      href={href}
      rel="noreferrer noopener"
      className="cK_xUFG6 hover:text-link-primary-hover focus-visible-outline-default cursor-pointer rounded-md border-0 bg-transparent p-0 leading-[inherit] text-current no-underline"
    >
      {text}
    </a>
  </span>
);

const MenuBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div className="bg-paper-primary border-neutral mb-1 hidden w-full items-center justify-center border-b bg-slate-200 pb-3  pt-4 md:flex">
      <div onMouseEnter={handleMouseEnter}>
        <MenuLink href="https://example.com/good-deals" text="All " />
      </div>
      <div className="flex items-center overflow-hidden whitespace-nowrap">
        <div style={{ width: '1000px', overflowX: 'auto' }}>
          <MenuLink href="/search/iphone" text="iPhone" />
          <MenuLink href="https://example.com/good-deals" text="Cell Phones" />
          <MenuLink href="https://example.com/good-deals" text="Samsung Galaxy" />
          <MenuLink href="/search/pre-owned-macbooks" text="MacBook" />
          <MenuLink href="https://example.com/good-deals" text="iPad" />
          <MenuLink href="https://example.com/good-deals" text="AirPods" />
          <MenuLink href="https://example.com/good-deals" text="Apple Watch" />
          <MenuLink href="https://example.com/good-deals" text="Video Game Consoles" />
          <MenuLink href="https://example.com/good-deals" text="iMac" />
          <MenuLink href="https://example.com/good-deals" text="Windows Laptops" />
          <MenuLink href="https://example.com/good-deals" text="Accessories" />
          <MenuLink href="https://example.com/good-deals" text="Tablets" />
          <MenuLink href="https://example.com/good-deals" text="Audio" />
          <MenuLink href="https://example.com/good-deals" text="Chromebooks" />
          <MenuLink href="https://example.com/good-deals" text="5G Phones" />
          <MenuLink href="https://example.com/good-deals" text="Monitors" />
          <MenuLink href="https://example.com/good-deals" text="Bestsellers" />
          <MenuLink href="https://example.com/student-discount" text="Military Discount" />
          <MenuLink href="https://example.com/good-deals" text="MacBook Pro" />
          <MenuLink href="https://example.com/good-deals" text="MacBook Air" />
          <MenuLink href="https://example.com/good-deals" text="iPhone 13" />
          <MenuLink href="https://example.com/good-deals" text="iPhone 11" />
          <MenuLink href="https://example.com/good-deals" text="iPhone 12" />
          <MenuLink href="https://example.com/good-deals" text="iPhone XR" />
          <MenuLink href="https://example.com/good-deals" text="iPhone XS" />
          <MenuLink href="https://example.com/good-deals" text="iPhone X" />
          <MenuLink href="https://example.com/good-deals" text="iPhone 8" />
          <MenuLink href="https://example.com/good-deals" text="Unlocked iPhone" />
          <MenuLink href="https://example.com/good-deals" text="Certified Renewed" />
          <MenuLink href="https://example.com/good-deals" text="Renewed by GoPro" />
          <MenuLink href="https://example.com/good-deals" text="Renewed by Sennheiser" />
          <MenuLink href="https://example.com/good-deals" text="iPad Mini" />
          <MenuLink href="https://example.com/good-deals" text="iPad Air" />
        </div>
      </div>

      {isOpen && (
        <div
          ref={menuRef}
          onMouseLeave={handleMouseLeave}
          className="absolute z-40 mt-16 flex w-full border	  bg-white  shadow-lg  transition-opacity duration-1000"
        >
          <DropdownMenu />
        </div>
      )}
    </div>
  );
};

export default MenuBar;
