import {
  mobile_page_header_Content,
  mobile_page_header_title,
} from "../../../Constants/MobilePage";
import style from "../MobilePage.module.css";
const MobilePageHeader = () => {
  return (
    <div className={style["header-container"]}>
      <h2>{mobile_page_header_title}</h2>

      <p>{mobile_page_header_Content}</p>
    </div>
  );
};

export default MobilePageHeader;
