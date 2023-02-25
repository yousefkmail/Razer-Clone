import { Link } from "react-router-dom";
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
      <Link className={style["nav-link"]} to={"/"}>
        {PC_Label}
      </Link>
      <Link className={style["nav-link"]} to={"/"}>
        {Console_Label}
      </Link>
      <Link className={style["nav-link"]} to={"/"}>
        {Mobile_Label}
      </Link>
      <Link className={style["nav-link"]} to={"/"}>
        {Lifestyle_Label}
      </Link>
      <Link className={style["nav-link"]} to={"/"}>
        {Services_Label}
      </Link>
      <Link className={style["nav-link"]} to={"/"}>
        {Community_Label}
      </Link>
      <Link className={style["nav-link"]} to={"/"}>
        {Support_Label}
      </Link>
      <Link className={style["nav-link"] + " nav-link"} to={"/"}>
        {Store_Label}
      </Link>

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
