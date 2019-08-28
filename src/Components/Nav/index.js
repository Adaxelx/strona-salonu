import React from "react";
import NavBtn from "Components/Nav/Mobile/btnNav";
import OpenedNav from "Components/Nav/Mobile/openNav";

const NavM = ({ active, handleClick }) => {
  return (
    <>
      <OpenedNav active={active} handleClick={handleClick} />
      <NavBtn active={active} handleClick={handleClick} />
    </>
  );
};

export default NavM;
