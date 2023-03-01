import style from "./Footer.module.css";
const FooterSocialMedia = () => {
  return (
    <div className={style["footer-column"] + " " + style["social-media"]}>
      <h3 style={{ color: "#44d62c", fontSize: "14px", textAlign: "right" }}>
        FOR GAMRES. BY GAMERS.™
      </h3>
      <span>
        <img
          style={{
            width: "30px",
            aspectRatio: "1/1",
            margin: "5px",
            cursor: "pointer",
          }}
          src="https://assets2.razerzone.com/images/phoenix/SM0001-facebook.svg"
          alt=""
        />
        <img
          style={{
            width: "30px",
            aspectRatio: "1/1",
            margin: "5px",
            cursor: "pointer",
          }}
          src="https://assets2.razerzone.com/images/phoenix/SM0003-instagram.svg"
          alt=""
        />
        <img
          style={{
            width: "30px",
            aspectRatio: "1/1",
            margin: "5px",
            cursor: "pointer",
          }}
          src="https://assets2.razerzone.com/images/phoenix/SM0005-twitter.svg"
          alt=""
        />
      </span>
    </div>
  );
};

export default FooterSocialMedia;
