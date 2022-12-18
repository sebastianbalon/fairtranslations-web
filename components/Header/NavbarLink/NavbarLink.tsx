import React from "react";
import Link from "next/link";
import { NextPage } from "next";

interface Props extends React.HTMLProps<HTMLDivElement> {
  children: string | React.ReactNode;
  href: string;
}

const NavbarLink: NextPage<Props> = (props: Props) => (
  <Link href={props.href} className="navbar-item">
    {props.children}
  </Link>
);

export default NavbarLink;
