import PageHeader from "../../Components/PageHeader/PageHeader";
import SubNavbar from "../../Components/SubNavbar/SubNavbar";
import data from "../../Data/Services_page.json";
import BackgroundedImageItem from "../../Components/BackgroundedImageItem/BackgroundedImageItem";
import Header from "../../Components/Header/Header";
const ServicesPage = () => {
  return (
    <>
      <SubNavbar data={data.subnav} />
      <PageHeader />
      <Header {...data.header} />

      {data.data.map((item, index) => (
        <BackgroundedImageItem {...item} />
      ))}
    </>
  );
};

export default ServicesPage;
