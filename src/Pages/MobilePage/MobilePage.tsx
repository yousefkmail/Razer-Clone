import BackgroundedImageItem from "../../Components/BackgroundedImageItem/BackgroundedImageItem";
import PageHeader from "../../Components/PageHeader/PageHeader";
import SectionContent from "../../Components/SectionContent/SectionContent";
import SubNavbar from "../../Components/SubNavbar/SubNavbar";
import data from "../../Data/Mobile_Page.json";

import MobilePageHeader from "./Components/MobilePageHeader";
const MobilePage = () => {
  return (
    <>
      <SubNavbar data={data.subnav} />
      <PageHeader />
      <MobilePageHeader />
      <BackgroundedImageItem {...data.data[0]} />
      <SectionContent data={data.content.slice(0, 3)} />
      <BackgroundedImageItem {...data.data[1]} />
      <SectionContent data={data.content.slice(3, 9)} />
      <BackgroundedImageItem {...data.data[2]} />
      <SectionContent data={data.content.slice(9, 12)} />
    </>
  );
};

export default MobilePage;
