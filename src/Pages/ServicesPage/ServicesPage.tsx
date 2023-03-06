import PageHeader from "../../Components/PageHeader/PageHeader";
import SubNavbar from "../../Components/SubNavbar/SubNavbar";
import ServicesHeader from "./Components/ServicesHeader";
import ServicesSection from "./Components/ServicesSection";
import data from "../../Data/Services_page.json";
const ServicesPage = () => {
  return (
    <>
      <SubNavbar data={data.subnav} />
      <PageHeader />
      <ServicesHeader {...data.header} />

      {data.data.map((item, index) => (
        <ServicesSection {...item} />
      ))}
    </>
  );
};

export default ServicesPage;
