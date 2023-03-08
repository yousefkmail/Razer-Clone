import style from "./Header.module.css";
interface HeaderProps {
  title: string;
  content?: string[];
}

const Header = ({ title, content }: HeaderProps) => {
  return (
    <div className={style["services-container"]}>
      <div className={style["services-title"]}>{title}</div>
      {content?.map((data, index) => (
        <div className={style["services-data-section"]} key={index}>
          {data}
        </div>
      ))}
    </div>
  );
};

export default Header;
