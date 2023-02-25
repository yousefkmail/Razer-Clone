import CollapseNavbar from "./Collapsenavbar";
import style from "./Navbar.module.css";
import { useRef } from "react";
const Navbar = () => {
  const ref = useRef<HTMLDivElement>(null);

  const ToggleNavbar = () => {
    ref.current?.classList.contains(style["collapse-open"])
      ? ref.current?.classList.remove(style["collapse-open"])
      : ref.current?.classList.add(style["collapse-open"]);
  };
  return (
    <div ref={ref} className={style.navbar}>
      <div className={style.linkscontainer}>
        <button onClick={ToggleNavbar} className={style.button}>
          <img
            src="https://www.razer.com/assets/images/mobile-menu.svg"
            alt=""
          />
        </button>
        <img
          src="https://assets2.razerzone.com/images/phoenix/razer-ths-logo.svg"
          alt="asd"
        />
        <CollapseNavbar collapse={false} />
        <i
          style={{ width: "50px" }}
          className={style["nav-link"] + " fa-solid fa-cart-shopping "}
        ></i>
      </div>
      <CollapseNavbar collapse={true} />
    </div>
  );
};

export default Navbar;
