"use client"
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from "../images/logo-vikati-300x81.webp";

export default function Header() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className=''>
        <nav className="flex justify-between px-4 items-center py-2">
          <div>
            <button className="border-none " onClick={toggleDropdown}>
              <svg
                class="icon icon-tabler icon-tabler-menu-2 "
                width="40"
                height="40"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="black"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 6l16 0" />
                <path d="M4 12l16 0" />
                <path d="M4 18l16 0" />
              </svg>
            </button>

            {isOpen && (
              <aside className=' fixed w-64 left-0 h-full bg-slate-500 z-[-1]'>
                <ul>
                  <li className='font-semibold text-2xl uppercase flex items-center'>
                      <Link href={""}>Inicio</Link>
                      <button>
                      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-selector" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M8 9l4 -4l4 4" />
  <path d="M16 15l-4 4l-4 -4" />
</svg>
                      </button>
                  </li>
                </ul>
              </aside>
            )}
          </div>

          <Image
            src={logo}
            alt="Logo Vikati"
            width={300}
            height={81}
            className="w-32 md:w-72"
          />
          <button className="border-none ">
            <svg
              class="icon icon-tabler icon-tabler-shopping-cart"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="black"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
              <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
              <path d="M17 17h-11v-14h-2" />
              <path d="M6 5l14 1l-1 7h-13" />
            </svg>
          </button>
        </nav>
      </header>
    </>
  );
}
