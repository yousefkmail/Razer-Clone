import { useRef, useState } from "react";
import {
  PC_Page_Bar_Links,
  Toggle_Button_Label,
} from "../../../Constants/pcpage";
import style from "../PcPage.module.css";

const PcPageNavBar = () => {
  const [active, setActive] = useState<boolean>(false);
  const handleClick = () => {
    if (ref.current?.classList.contains(style["mobile-active"])) {
      ref.current?.classList.remove(style["mobile-active"]);

      setActive(false);
    } else {
      ref.current?.classList.add(style["mobile-active"]);
      setActive(true);
    }
  };
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div ref={ref} className={style["navbar-container"]}>
      <button onClick={handleClick} className={style["togglebutton"]}>
        {Toggle_Button_Label}
        {active ? (
          <i
            style={{ marginLeft: "20px" }}
            className="fa-solid fa-angle-down"
          ></i>
        ) : (
          <i
            style={{ marginLeft: "20px" }}
            className="fa-solid fa-angle-up"
          ></i>
        )}
      </button>
      <div className={style["navbar-inner-container"]}>
        {PC_Page_Bar_Links.map((item, index) => (
          <span className={style["atag"]} key={index}>
            {item}{" "}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PcPageNavBar;
