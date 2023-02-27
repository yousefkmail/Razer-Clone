import style from "./PageHeader.module.css";
const PageHeader = () => {
  return (
    <div className={style.header}>
      New Year’s Specials: Ready up for 2023 with our best picks and latest CES
      releases.
      <a className="nav-link text-white" href="">
        {"Shop now >"}
      </a>
    </div>
  );
};

export default PageHeader;
