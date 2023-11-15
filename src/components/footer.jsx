import React from 'react'
import { logo } from '../assets';
import { Typography } from "@material-tailwind/react";
 
export default function Footer() {
  return (
    <footer className="w-full p-8">
      <div className="border-t border-white flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 text-center md:justify-between">
        <img src={logo} alt="logo-ct" className="h-24" />
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as="a"
              href="https://www.instagram.com/phyclub_iiserb/?hl=en"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Instagram
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="https://www.youtube.com/@physicsclubiiserb5203"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Youtube
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="https://www.linkedin.com/company/physics-club-iiser-b/"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Linkedin
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="https://twitter.com/phyclub_iiserb"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              X
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="https://mail.google.com/mail/?view=cm&to=iiserbhopalphyclub@gmail.com&su=SUBJECT&body=BODY&bcc="
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              mail
            </Typography>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography color="blue-gray" className="text-center font-normal">
        &copy; IISERB Physics Club
      </Typography>
    </footer>
  );
}
