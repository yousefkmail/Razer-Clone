import { useState } from "react";
import style from "./Footer.module.css";
import FooterLinksGroup from "./FooterLinksGroup";
import FooterSocialMedia from "./FooterSocialMedia";

interface FooterLinksGroupProps {
  title: string;
  links: string[];
  ismobileactive: boolean;
}
const Footer = () => {
  const [footerData, setFooterData] = useState<FooterLinksGroupProps[]>([
    {
      title: "Shop",
      links: [
        "RazerStores",
        "RazerCafe",
        "Store Locator",
        "Purchase Programs",
        "Education",
        "Exclusives",
        "RazerStore Rewards",
        "Newsletter",
      ],
      ismobileactive: false,
    },
    {
      title: "Explore",
      links: ["Technology", "Chroma RGB", "Concepts", "Esports", "Collabs"],
      ismobileactive: false,
    },
    {
      title: "Support",
      links: [
        "Get Help",
        "Registration & Warranty",
        "RazerStore Support",
        "RazerCare",
        "Manage Razer ID",
        "Support Videos",
        "Accessibility Statement",
      ],
      ismobileactive: false,
    },
    {
      title: "Company",
      links: ["About Us", "Careers", "Press Room", "zVentures", "Contact Us"],
      ismobileactive: false,
    },
  ]);

  const activatelinks = (newindex: number) => {
    let newdata: FooterLinksGroupProps[] = [...footerData];

    newdata.forEach((data, index) => {
      if (index === newindex && newdata[index].ismobileactive) {
        newdata[index].ismobileactive = false;
      } else if (index === newindex) {
        newdata[index].ismobileactive = true;
      } else {
        newdata[index].ismobileactive = false;
      }
    });
    setFooterData(newdata);
  };
  return (
    <>
      <div>
        <div className={style.container}>
          <div className={style["inner-container"]}>
            {footerData.map((data, index) => (
              <FooterLinksGroup
                setIsDataShown={activatelinks}
                {...data}
                key={index}
                index={index}
              />
            ))}

            <FooterSocialMedia />
          </div>
        </div>

        <div className={style["footer-margin-line"]}></div>
        <div className={style["footer-bottom"]}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              maxWidth: "768px",
              flexGrow: "1",
            }}
          >
            <a style={{ margin: "0 10px" }} className={style["atag"]}>
              Copyright © 2023 Razer Inc. All rights reserved.
            </a>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              <a className={style["atag"]}>Site Map </a>
              <a className={style["atag"]}>Legal terms </a>
              <a className={style["atag"]}>Privacy policy </a>
              <a className={style["atag"]}>Cookies settings</a>
            </div>
          </div>
          <div className={style["footer-margin-line"]}></div>

          <div style={{ color: "#999", fontSize: "14px" }}>
            United States | Change Location
          </div>
          <FooterSocialMedia />
        </div>
      </div>
    </>
  );
};

export default Footer;
