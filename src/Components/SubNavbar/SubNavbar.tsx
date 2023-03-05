import style from "./SubNavbar.module.css";

interface SubNavbarProps {
  image: string;
  label: string;
  isNew?: boolean;
}

interface SubNavbarArray {
  data: SubNavbarProps[];
}
const SubNavbar = ({ data }: SubNavbarArray) => {
  return (
    <div className={style["container"]}>
      {data.map((itemdata, index) => (
        <div className={style["item-container"]} key={index}>
          <div className={style["image-container"]}>
            <img src={itemdata.image} alt="" />
          </div>
          <a className={style["atag"]}>{itemdata.label}</a>
          {itemdata.isNew ? (
            <span className={style["new-label"]}>New</span>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default SubNavbar;
