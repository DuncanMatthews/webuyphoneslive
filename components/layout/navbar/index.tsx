import Cart from 'components/cart';
import OpenCart from 'components/cart/open-cart';
import LogoSquare from 'components/logo-square';
import SessionButton from 'components/menus/sessionButton';
import { getMenu } from 'lib/shopify';
import { Menu } from 'lib/shopify/types';
import Link from 'next/link';
import { Suspense } from 'react';
import MenuBar from './bar-menu';
import MobileMenu from './mobile-menu';
import Search from './search';
const { SITE_NAME } = process.env;

export default async function Navbar() {
  const menu = await getMenu('next-js-frontend-header-menu');

  return (
    <div>
      <nav className="relative flex items-center justify-between p-4 lg:px-6">
        <div className="block flex-none md:hidden">
          <MobileMenu menu={menu} />
        </div>
        <div className="flex w-full items-center">
          <div className="flex w-full md:w-1/3">
            <Link
              href="/"
              className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6"
            >
              <LogoSquare />
              {/* <div className="ml-2 flex-none text-sm font-medium uppercase md:hidden lg:block">
                {SITE_NAME}
              </div> */}
            </Link>
            {menu.length ? (
              <ul className="hidden gap-6 text-sm md:flex md:items-center">
                {menu.map((item: Menu) => (
                  <li key={item.title}>
                    <Link
                      href={item.path}
                      className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
          <div className="mr-5 hidden space-x-4 pr-10 sm:inline-flex">
            <a className="whitespace-nowrap" href="/about-webuyphones">
              About us
            </a>
            <Link
              className="whitespace-nowrap"
              href="/sell-to-us"
              role="link"
              aria-label="Trade-in link for selling to us"
            >
              Trade-in
            </Link>

            <a
              className="whitespace-nowrap"
              role="link"
              aria-label="Trade-in link for selling to us"
              href="#"
            >
              Help
            </a>
          </div>
          <div
            role="link"
            aria-label="Trade-in link for selling to us"
            className="hidden  justify-center md:flex md:w-1/3"
          >
            <Search />
          </div>
          <div className="flex justify-end md:w-1/3">
            <Suspense fallback={<OpenCart />}>
              <Cart />
            </Suspense>
            <SessionButton />
          </div>
        </div>
      </nav>
      <MenuBar />
    </div>
  );
}
