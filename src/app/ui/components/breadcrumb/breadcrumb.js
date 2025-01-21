"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Breadcrumb({
  home,
  separator,
  className,
  listClasses,
  activeClasses,
  capitalizeLinks = true,
}) {
  const paths = usePathname();
  const pathNames = paths.split("/").filter((path) => path);

  return (
    <div className={className}>
      <ul className="flex">
        {home && (
          <li className={listClasses}>
            <Link href="/">{home}</Link>
          </li>
        )}
        {home && paths !== "/" && separator}
        {pathNames.map((link, index) => {
          let href = `/${pathNames.slice(0, index + 1).join("/")}`;
          let itemClasses =
            paths === href ? `${listClasses} ${activeClasses}` : listClasses;

          let decodedLink = decodeURIComponent(link);

          decodedLink = decodedLink.replace(/-/g, " ");

          decodedLink = capitalizeLinks
            ? decodedLink[0].toUpperCase() + decodedLink.slice(1)
            : decodedLink;

          return (
            <React.Fragment key={index}>
              <li className={itemClasses}>
                <Link href={href}>{decodedLink}</Link>
              </li>
              {pathNames.length !== index + 1 && separator}
            </React.Fragment>
          );
        })}
      </ul>
    </div>
  );
}
