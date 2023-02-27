import {
  Buy_Label,
  Learn_More_Label,
} from "../../../../Constants/HomePageBanner";
import style from "../../MainPage/MainPage.module.css";
interface HomePageBanner {
  Image: string;
  MainTitle: string;
  SubTitle: string;
}

const HomePageBanner = ({ Image, MainTitle, SubTitle }: HomePageBanner) => {
  return (
    <div className={style["banner-container"]}>
      <img src={Image} alt="" />
      <a className={style["banner-link"]} href=""></a>
      <h2 className={style["h2"]}>{MainTitle}</h2>
      <h3 className={style["h3"]}>{SubTitle}</h3>
      <div className={style["content-container"]}>
        <a href="">
          {Learn_More_Label}
          <span style={{ color: "#44d62c" }}>{" >"}</span>
        </a>
        <a href="">
          {Buy_Label}
          <span style={{ color: "#44d62c" }}>{" >"}</span>
        </a>
      </div>
    </div>
  );
};

export default HomePageBanner;
