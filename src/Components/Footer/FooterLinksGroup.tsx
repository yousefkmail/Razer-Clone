import { useEffect } from "react";
import style from "./Footer.module.css";
interface FooterLinksGroupProps {
  title: string;
  links: string[];
  ismobileactive: boolean;
  setIsDataShown: (newindex: number) => void;
  index: number;
}
const FooterLinksGroup = ({
  title,
  links,
  ismobileactive,
  setIsDataShown,
  index,
}: FooterLinksGroupProps) => {
  useEffect(() => {
    console.log(ismobileactive);
  }, [ismobileactive]);
  return (
    <div className={style["footer-column"]}>
      <div className={style["title"]}>
        <span>{title} </span>
        <button
          onClick={() => setIsDataShown(index)}
          className={style["mobile-button"]}
        >
          {ismobileactive ? "×" : "+"}
        </button>
      </div>
      <div
        className={
          style["acontainer"] +
          " " +
          (ismobileactive === true ? style["acontainer-active"] : "")
        }
      >
        {links.map((item, index) => (
          <a key={index} className={style["atag"]}>
            {item}
          </a>
        ))}
      </div>
    </div>
  );
};

export default FooterLinksGroup;
