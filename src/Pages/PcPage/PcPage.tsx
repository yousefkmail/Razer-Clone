import PageHeader from "../../Components/PageHeader/PageHeader";
import SectionContent from "../../Components/SectionContent/SectionContent";
import SectionHeader from "../../Components/SectionHeader/SectionHeader";
import PcPageNavBar from "./Components/PcPageNavBar";
import data from "../../Data/PC_Page.json";
const PcPage = () => {
  console.log(data.data[0].content);

  return (
    <div>
      <>
        <PcPageNavBar />
        <PageHeader />
        {data.data.map((dataa, index) => (
          <>
            <SectionHeader key={index} {...dataa.header} />

            {<SectionContent data={dataa.content} />}
          </>
        ))}
      </>
    </div>
  );
};

export default PcPage;
