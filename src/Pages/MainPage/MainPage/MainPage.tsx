import PageHeader from "../../../Components/Navbar/PageHeader/PageHeader";
import HomePageBanner from "../Components/HomePageBanner/HomePageBanner";
import style from "./MainPage.module.css";
const MainPage = () => {
  return (
    <div>
      <PageHeader />
      <HomePageBanner
        MainTitle="NEW RAZER BLADE 16"
        SubTitle="BIGGER. BETTER. STILL THE BEST."
        Image="https://assets2.razerzone.com/images/pnx.assets/2d7c19fedce91a875fc6a861e251ad30/razer-blade-16-homepage-desktop.jpg"
      />
      <HomePageBanner
        SubTitle="FOR THE PRO"
        MainTitle="RAZER DEATHADDER V3 PRO FAKER EDITION"
        Image="https://assets2.razerzone.com/images/pnx.assets/9948f015477f5aeb823f471848b4c501/deathadder-v3-pro-faker-edition-homepage-desktop1x.jpg"
      />
      <HomePageBanner
        MainTitle="NEW RAZER BLADE 16"
        SubTitle="THE ULTIMATE DESKTOP REPLACEMENT"
        Image="https://assets2.razerzone.com/images/pnx.assets/2d7c19fedce91a875fc6a861e251ad30/razer-blade-18-homepage-desktop.jpg"
      />
      <div className={style["grid-banners"]}>
        <HomePageBanner
          MainTitle="NEW RAZER BLADE 15"
          SubTitle="PORTABLE POWERFULL PERFECTION"
          Image="https://assets2.razerzone.com/images/pnx.assets/3474002077a69ea3690d1a798c669b13/razer-blade-15-2023-b-950x580-desktop.jpg"
        />
        <HomePageBanner
          SubTitle="RAZER BLACKWIDOW V4 PRO"
          MainTitle="FULL-BLOWN BATTLESTATION IMMERSION"
          Image="https://assets2.razerzone.com/images/pnx.assets/3474002077a69ea3690d1a798c669b13/razer-blackwidow-v4-pro-950x580-desktop.jpg"
        />
        <HomePageBanner
          MainTitle="RAZER DEATHADDER v3"
          SubTitle="FOR THE PRO"
          Image="https://assets2.razerzone.com/images/pnx.assets/3474002077a69ea3690d1a798c669b13/razer-deathadder-v3-b-950x580-desktop.jpg"
        />
        <HomePageBanner
          MainTitle="RAZER | EVISU"
          SubTitle="AHEAD OF THE GAME"
          Image="https://assets2.razerzone.com/images/pnx.assets/3474002077a69ea3690d1a798c669b13/razer-and-evisu-collab-b-950x580-desktop.jpg"
        />
        <HomePageBanner
          MainTitle="RAZER ENKI PRO"
          SubTitle="AUTOMOBILI LAMBORGHINI EDITION"
          Image="https://assets2.razerzone.com/images/pnx.assets/84d0946021d11b959bda0545c4d4c234/enkipro-lamborghini-b-950x580-desktop.jpg"
        />
        <HomePageBanner
          MainTitle="RAZER EDGE"
          SubTitle="THE ULTIMATE ANDROID HANDHELD"
          Image="https://assets2.razerzone.com/images/pnx.assets/dec1968e4414aa9dd00718ae5c3f531b/razer-edge-b-950x580-desktop.jpg"
        />
      </div>
    </div>
  );
};

export default MainPage;
