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

          // Reemplazar guiones por espacios
          let itemLink = link.replace(/-/g, " ");

          // Capitalizar el texto si es necesario
          itemLink = capitalizeLinks
            ? itemLink[0].toUpperCase() + itemLink.slice(1)
            : itemLink;

          return (
            <React.Fragment key={index}>
              <li className={itemClasses}>
                <Link href={href}>{itemLink}</Link>
              </li>
              {pathNames.length !== index + 1 && separator}
            </React.Fragment>
          );
        })}
      </ul>
    </div>
  );
}
