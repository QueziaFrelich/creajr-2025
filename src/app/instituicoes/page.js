import SectionBanner from "../ui/sections/instituicoes/section-banner";
import SectionCourseBenefits from "../ui/sections/instituicoes/section-course-benefits";
import SectionPartnership from "../ui/sections/instituicoes/section-partnership";
import SectionIE from "../ui/sections/instituicoes/section-ie";
import SectionInstituitions from "../ui/sections/instituicoes/section-institutions";



export default function LayoutInstituicoes() {
  return (
    <>
      <SectionBanner />
      <SectionCourseBenefits />
      <SectionPartnership />
      <SectionIE/>
      <SectionInstituitions/>
    </>
  );
}
