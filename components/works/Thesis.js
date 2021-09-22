import { BiVector } from "react-icons/bi";
import { ImTree } from "react-icons/im";
import { FaPython, FaReact } from "react-icons/fa";
import { SiCplusplus, SiMaterialUi, SiSass } from "react-icons/si";
import WorkSection from "./WorkSection";

export function Thesis() {
  return (
    <WorkSection
      title="Simulated UAV Navigation Algorithm"
      subtitle={['Master Thesis', 'Robotics']}
      img="img/nestaur/logo.png"
      src="https://github.com/rhidra/autopilot"
      isRight={true}
      icons={[{
        src: 'ros_logo_white.png',
        label: 'ROS',
      }, {
        src: 'PX4_logo_white.svg',
        label: 'PX4',
      }, {
        src: 'mavlink.png',
        label: 'MAVLink',
      }, {
        icon: SiCplusplus,
        label: 'C++',
      }, {
        icon: FaPython,
        label: 'Python',
      }, {
        icon: ImTree,
        label: 'Octomap',
      }, {
        src: 'gazebo.png',
        label: 'Gazebo',
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