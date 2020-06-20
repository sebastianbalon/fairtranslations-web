import React from 'react';
import { NextPage } from "next";

interface Props extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
  title: string;
  href?: string;
}

const NavbarDropdown: NextPage<Props> = (props: Props) => (
  <div className="navbar-item has-dropdown is-hoverable">
    <a className="navbar-link" href={props.href || '#'}>{props.title}</a>

    <div className="navbar-dropdown">
      {props.children}
    </div>
  </div>
);


export default NavbarDropdown;