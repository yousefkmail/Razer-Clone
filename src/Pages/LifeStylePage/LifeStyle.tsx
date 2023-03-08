import BackgroundedImageItem from "../../Components/BackgroundedImageItem/BackgroundedImageItem";
import Header from "../../Components/Header/Header";
import PageHeader from "../../Components/PageHeader/PageHeader";
import SubNavbar from "../../Components/SubNavbar/SubNavbar";
import data from "../../Data/Lifestyle_Page.json";
const LifeStyle = () => {
  return (
    <>
      <SubNavbar data={data.subnav} />
      <PageHeader />
      <Header {...data.header} />
      {data.data.map((data, index) => (
        <BackgroundedImageItem key={index} {...data} />
      ))}
    </>
  );
};

export default LifeStyle;
