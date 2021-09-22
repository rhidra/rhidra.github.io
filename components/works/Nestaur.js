import { BiVector } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { SiMaterialUi, SiSass } from "react-icons/si";
import WorkSection from "./WorkSection";

export function Nestaur() {
  return (
    <WorkSection
      title="Nestaur: KPI Visualization tool"
      subtitle={['Freelance', 'Frontend']}
      img="img/nestaur/logo.png"
      logo="img/nestaur/logo.png"
      link="https://nestaur.com"
      isRight={false}
      icons={[{
        icon: FaReact,
        label: 'React',
      }, {
        icon: SiMaterialUi,
        label: 'MaterialUI',
      }, {
        src: 'd3-white.svg',
        label: 'd3.js',
      }, {
        icon: BiVector,
        label: 'SVG',
      }, {
        icon: SiSass,
        label: 'SASS',
      }]}
    >
    <>
      I helped this startup re-build their entire front-end after a bad external team experience. 
      As a tool for KPI monitoring, this product needed to display large amount of data, which 
      should be usable for the user. I made this React app capable of running smoothly and intuitively. 
      After solving various UX problems, I re-designed their entire interface to be responsive 
      and tackled issues such as internationalization and dark mode. I learned a lot about complex UI 
      problems, SVG graph generation and React features. We worked with an agile methodology.
    </>
    <>
      I helped this startup re-build their entire front-end after a bad external team experience. 
      As a tool for KPI monitoring, this product needed to display large amount of data, which 
      should be usable for the user.
    </>
    </WorkSection>
  );
}