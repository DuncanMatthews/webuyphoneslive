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

const MenuBar = () => (
  <div className="bg-paper-primary border-neutral mb-1	 hidden w-full items-center justify-center border-b bg-slate-200	 pb-0 pl-7 pt-4 md:flex">
    <button
      type="button"
      className="cK_xUFG6 hover:text-link-primary-hover focus-visible-outline-default group hidden cursor-pointer rounded-md border-0 bg-transparent p-0 leading-[inherit] text-current no-underline md:mr-6 md:flex md:pb-3"
      data-test="desktop-burger-menu"
    >
      <div className="relative mr-2 h-4 w-5">{/* ... burger icon ... */}</div>
      <span className="body-2-bold self-end text-black">All items</span>
    </button>
    <div className="flex-1 items-center overflow-hidden whitespace-nowrap">
      <div className="flex items-center overflow-x-scroll pb-3 text-black">
        <MenuLink href="https://example.com/student-discount" text="Student Discount" />
        <MenuLink href="https://example.com/good-deals" text="Good Deals" />
        <MenuLink href="https://example.com/student-discount" text="Student Discount" />
        <MenuLink href="https://example.com/good-deals" text="Good Deals" />
        <MenuLink href="https://example.com/student-discount" text="Student Discount" />
        <MenuLink href="https://example.com/good-deals" text="Good Deals" />
        <MenuLink href="https://example.com/student-discount" text="Student Discount" />
        <MenuLink href="https://example.com/good-deals" text="Good Deals" />
        <MenuLink href="https://example.com/student-discount" text="Student Discount" />
        <MenuLink href="https://example.com/good-deals" text="Good Deals" />
        <MenuLink href="https://example.com/student-discount" text="Student Discount" />
        <MenuLink href="https://example.com/good-deals" text="Good Deals" />
        <MenuLink href="https://example.com/student-discount" text="Student Discount" />
        <MenuLink href="https://example.com/good-deals" text="Good Deals" />
        <MenuLink href="https://example.com/student-discount" text="Student Discount" />
        <MenuLink href="https://example.com/good-deals" text="Good Deals" />
        {/* ... add more MenuLink components here ... */}
      </div>
    </div>
  </div>
);

export default MenuBar;
