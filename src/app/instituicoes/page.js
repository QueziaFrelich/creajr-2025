import SectionBanner from "../ui/sections/instituicoes/section-banner";
import SectionCourseBenefits from "../ui/sections/instituicoes/section-course-benefits";
import SectionPartnership from "../ui/sections/instituicoes/section-partnership";
import SectionIE from "../ui/sections/instituicoes/section-ie";
import SectionInstituitions from "../ui/sections/instituicoes/section-institutions";
import SectionUniversityExtension from "../ui/sections/instituicoes/section-university-extension";
import SectionFunctions from "../ui/sections/instituicoes/section-functions";



export default function LayoutInstituicoes() {
  return (
    <>
      <SectionBanner />
      <SectionCourseBenefits />
      <SectionPartnership />
      <SectionIE/>
      <SectionInstituitions/>
      <SectionUniversityExtension />
      <SectionFunctions/>
    </>
  );
}
