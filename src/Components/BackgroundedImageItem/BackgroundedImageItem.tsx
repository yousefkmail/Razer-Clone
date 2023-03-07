import style from "./BackgroundedImageItem.module.css";
interface ServicesSectionProps {
  title: string;
  content: string[];
  backgroundImage: string;
}
const BackgroundedImageItem = ({
  title,
  content,
  backgroundImage,
}: ServicesSectionProps) => {
  return (
    <div className={style["services-section-container"]}>
      <div className={style["services-inner-container"]}>
        <img src={backgroundImage} alt="" />
        <h2>{title}</h2>
        {content.map((data, index) => (
          <p key={index}>{data}</p>
        ))}
        <a className={style["atag"]} href="">
          {"Learn more >"}
        </a>
      </div>
    </div>
  );
};

export default BackgroundedImageItem;
