import { NavLink } from "react-router-dom";
import style from "./Navbar.module.css";
import {
  Mobile_Label,
  Community_Label,
  Console_Label,
  Lifestyle_Label,
  PC_Label,
  Services_Label,
  Store_Label,
  Support_Label,
  Search_Bar_Label,
} from "../../Constants/navbar";
type CollapseNavbarType = {
  collapse: boolean;
};

const CollapseNavbar = ({ collapse }: CollapseNavbarType) => {
  const navbarstyle = collapse ? style.collapse : "";
  const GetNavLinkClass = (isActive: boolean) => {
    return isActive
      ? style["nav-link"] + " " + style["nav-link-active"]
      : style["nav-link"];
  };
  return (
    <div className={style.collapselinks + " " + navbarstyle}>
      <div className={style.searchbar}>
        <div className={style.inputcontainer}>
          <i
            style={{ color: "#888", margin: "10px" }}
            className={" fa-solid fa-magnifying-glass "}
          ></i>

          <input placeholder={Search_Bar_Label} type="search" name="" id="" />
        </div>
      </div>
      <NavLink
        className={({ isActive }) => GetNavLinkClass(isActive)}
        to={"/pc"}
      >
        {PC_Label}
      </NavLink>
      <NavLink
        className={({ isActive }) => GetNavLinkClass(isActive)}
        to={"/console"}
      >
        {Console_Label}
      </NavLink>
      <NavLink
        className={({ isActive }) => GetNavLinkClass(isActive)}
        to={"/mobile"}
      >
        {Mobile_Label}
      </NavLink>
      <NavLink
        className={({ isActive }) => GetNavLinkClass(isActive)}
        to={"/lifestyle"}
      >
        {Lifestyle_Label}
      </NavLink>
      <NavLink
        className={({ isActive }) => GetNavLinkClass(isActive)}
        to={"/services"}
      >
        {Services_Label}
      </NavLink>
      <NavLink
        className={({ isActive }) => GetNavLinkClass(isActive)}
        to={"/community"}
      >
        {Community_Label}
      </NavLink>
      <NavLink
        className={({ isActive }) => GetNavLinkClass(isActive)}
        to={"/support"}
      >
        {Support_Label}
      </NavLink>
      <NavLink
        className={({ isActive }) => GetNavLinkClass(isActive)}
        to={"/store"}
      >
        {Store_Label}
      </NavLink>
      <i
        className={
          style["nav-link"] +
          " fa-solid fa-magnifying-glass " +
          style["search-button"]
        }
      ></i>
    </div>
  );
};

export default CollapseNavbar;
