import style from "./SectionHeader.module.css";
interface SectionHeaderProps {
  title: string;
  content: string;
}

const SectionHeader = ({ title, content }: SectionHeaderProps) => {
  return (
    <div className={style["container"]}>
      <header className={style["header"]}>{title}</header>
      <p className={style["p"]}>{content}</p>
    </div>
  );
};

export default SectionHeader;
