import Link from "next/link";
import React from "react";
import { PiCaretUpBold } from "react-icons/pi";
import { FiGlobe } from "react-icons/fi";

export default function CompactFooter() {
  const links = [
    "privacy",
    "terms",
    "sitemap",
    "company details",
    "destinations",
  ];
  return (
    <div className="fixed bottom-0 px-20 border-t border-t-gray-200 py-4 flex justify-between w-full text-sm">
      <ul className="flex gap-3 font-normal ">
        <li>&copy; {new Date().getFullYear()} Airbnb, Inc</li>
        {links.map((link) => (
          <li key={link}>
            <Link href="#">
              {link.charAt(0).toUpperCase() + link.slice(1).toLowerCase()}
            </Link>
          </li>
        ))}
      </ul>
      <ul className="flex gap-4 font-medium">
        <li className="flex items-center gap-2">
          <FiGlobe /> English (IN)
        </li>
        <li>$ USD</li>
        <li className="flex items-center gap-2">
          Support & resources <PiCaretUpBold />
        </li>
      </ul>
    </div>
  );
}