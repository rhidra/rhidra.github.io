import { BiVector } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { SiMaterialUi, SiSass } from "react-icons/si";
import WorkSection from "./WorkSection";

export function Nestaur({addMargin}) {
  return (
    <WorkSection
      title="Nestaur: KPI Visualization tool"
      subtitle={['Freelance', 'Frontend']}
      img="img/nestaur/tablet.png"
      imgSize={400}
      logo="img/nestaur/logo.png"
      link="https://nestaur.com"
      isRight={true}
      addMargin={addMargin}
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
      As a tool for <strong>KPI monitoring</strong>, this product needed to display <strong>large amount of data</strong>, which 
      should be usable for the user. I made this React app capable of running <strong>smoothly</strong> and <strong>intuitively</strong>.
      After solving various UX problems, I re-designed their entire interface to be <strong>responsive</strong> and 
      tackled issues such as <strong>internationalization</strong> and dark layout. I learned a lot about complex UI 
      problems, <strong>SVG graph generation</strong> and React features. We worked with an agile methodology.
    </>
    <>
      I helped this startup re-build their entire front-end after a bad external team experience. 
      As a tool for <strong>KPI monitoring</strong>, this product needed to display <strong>large amount of data</strong>, which 
      should be usable for the user.
    </>
    </WorkSection>
  );
}