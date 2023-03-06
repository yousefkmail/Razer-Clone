import style from "../ServicesPage.module.css";
interface ServicesHeaderprops {
  title: string;
  data: string[];
}
const ServicesHeader = ({ title, data }: ServicesHeaderprops) => {
  return (
    <div className={style["services-container"]}>
      <div className={style["services-title"]}>{title}</div>
      {data.map((data, index) => (
        <div className={style["services-data-section"]} key={index}>
          {data}
        </div>
      ))}
    </div>
  );
};

export default ServicesHeader;
