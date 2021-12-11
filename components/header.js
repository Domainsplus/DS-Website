/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/link-passhref */
import React from "react";
import Image from "next/image";
import Link from "next/link";
import D2SLogo from "../public/d2s-logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { useRef } from "react";

export default function header() {
  
  const navRef = React.createRef()

  function mobileMenu() {
    navRef.current.classList.toggle('active');
  }
  
  return (
    <div>
      <div
        className="image"
      >
        <div className="mobileView">
          <span className="logo flex title-font font-medium items-center text-gray-900">
            <Link href="/">
              <Image src={D2SLogo} />
            </Link>
          </span>
          <span className="hamburger text-gray-100" onClick={mobileMenu}>
            <FontAwesomeIcon className='w-6 h-6' icon={faBars} />
          </span>
        </div>
        <nav ref={navRef} className="navbar">
          <span className="mr-10 text-gray-100 hover:text-gray-100">
            <Link href="/">Home</Link>
          </span>
          <span className="mr-10 text-gray-100 hover:text-gray-100">
            <Link href="/about">About</Link>
          </span>
          <span className="mr-10 text-gray-100 hover:text-gray-100">
            <Link href="/faculty">Faculty</Link>
          </span>
          <span className="mr-10 text-gray-100 hover:text-gray-100">
            <Link href="/members">Members</Link>
          </span>
          <span className="mr-10 text-gray-100 hover:text-gray-100">
            <Link href="/alumni">Alumni</Link>
          </span>
          <span className="mr-10 text-gray-100 hover:text-gray-100">
            <Link href="/achievements">Achievements</Link>
          </span>
          <span className="text-gray-100 hover:text-gray-100">
            <Link href="/contact">Contact</Link>
          </span>
        </nav>
      </div>
    </div>
  );
}
