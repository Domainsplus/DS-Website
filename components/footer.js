import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function footer() {
  return (
    <div className="footer">
      <a
        href="https://d2s-website.vercel.app/"
        className="footer-links text-gray-100 text-lg mb-1 flex flex-row"
      >
        &#169; 2021 - Domain Square +
      </a>
      <a
        href="https://dpsrkp.net/"
        className="footer-links text-gray-100 text-lg mb-1"
      >
        Delhi Public School R K Puram
      </a>
      <span className="footer-icons">
        <a
          href="https://fb.com/dsquareplus"
          className="footer-links pr-4 text-gray-100 text-lg"
        >
          Facebook
        </a>
        {/* <a href='' className='pr-4 hover:text-gray-100 text-gray-500'>
                    <FontAwesomeIcon className='w-6 h-6' icon={faTwitter} />
                </a> */}
        <p className="pr-4 text-gray-100"> | </p>
        <a
          href="https://www.youtube.com/channel/UCRSJaqtv1Ft1UoU-w_T10FA"
          className="footer-links pr-4 text-gray-100 text-lg"
        >
          Youtube
        </a>
        {/* <a href='' className="pr-4 text-gray-500 hover:text-gray-100">
                    <FontAwesomeIcon className='w-6 h-6' icon={faInstagram} />
                </a>
                <a href='' className="text-gray-500 hover:text-gray-100">
                    <FontAwesomeIcon className='w-6 h-6' icon={faLinkedinIn} />
                </a> */}
      </span>
    </div>
  );
}
