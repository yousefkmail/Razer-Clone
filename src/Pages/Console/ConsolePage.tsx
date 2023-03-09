import BackgroundedImageItem from "../../Components/BackgroundedImageItem/BackgroundedImageItem";
import Header from "../../Components/Header/Header";
import PageHeader from "../../Components/PageHeader/PageHeader";
import SubNavbar from "../../Components/SubNavbar/SubNavbar";
import {
  Console_Page_header_contnet,
  title,
} from "../../Constants/Console_Page";
import data from "../../Data/Console_Page.json";
const ConsolePage = () => {
  return (
    <>
      <SubNavbar data={data.subnav} />
      <PageHeader />
      <Header title={title} content={[Console_Page_header_contnet]} />
      {data.data.map((data, index) => (
        <BackgroundedImageItem key={index} {...data} />
      ))}
    </>
  );
};

export default ConsolePage;
