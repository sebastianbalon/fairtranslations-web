import React from "react";
import { NextPage } from "next";

interface Props extends React.HTMLProps<HTMLDivElement> {
  onClick: () => void;
  isActive: boolean;
}

const Burger: NextPage<Props> = (props: Props) => (
  <a
    className={"navbar-burger burger" + (props.isActive ? " is-active" : "")}
    onClick={props.onClick}
  >
    <span aria-hidden="true"></span>
    <span aria-hidden="true"></span>
    <span aria-hidden="true"></span>
  </a>
);

export default Burger;
