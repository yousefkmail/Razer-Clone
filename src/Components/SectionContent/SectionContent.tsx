import style from "./SectionContent.module.css";
interface SectionContentdata {
  image: string;
  title: string;
  content: string;
}

interface SectionContentProps {
  data: SectionContentdata[];
}

const SectionContent = ({ data }: SectionContentProps) => {
  return (
    <div className={style["container"]}>
      <div className={style["inner-container"]}>
        {data.map((data, index) => (
          <div className={style["item"]} key={index}>
            <div className={style["item-container"]}>
              <img src={data.image} alt="" />
              <div className={style["item-title"]}>{data.title}</div>
              <div className={style["item-content"]}>{data.content}</div>
              <br />
              <a className={style["atag"]}>{"Learn more >"}</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionContent;
