import PageHeader from "../../Components/PageHeader/PageHeader";
import SubNavbar from "../../Components/SubNavbar/SubNavbar";
import ServicesHeader from "./Components/ServicesHeader";
import data from "../../Data/Services_page.json";
import BackgroundedImageItem from "../../Components/BackgroundedImageItem/BackgroundedImageItem";
const ServicesPage = () => {
  return (
    <>
      <SubNavbar data={data.subnav} />
      <PageHeader />
      <ServicesHeader {...data.header} />

      {data.data.map((item, index) => (
        <BackgroundedImageItem {...item} />
      ))}
    </>
  );
};

export default ServicesPage;
