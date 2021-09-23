import { BiVector } from "react-icons/bi";
import { ImTree } from "react-icons/im";
import { FaPython, FaReact } from "react-icons/fa";
import { SiCplusplus, SiMaterialUi, SiSass } from "react-icons/si";
import WorkSection from "./WorkSection";

export function Thesis({addMargin}) {
  return (
    <WorkSection
      title="Simulated UAV Navigation Algorithm"
      subtitle={['Master Thesis', 'Robotics']}
      img="img/thesis/demo.gif"
      src="https://github.com/rhidra/autopilot"
      link="https://github.com/rhidra/autopilot/raw/master/Thesis.pdf"
      isRight={true}
      imgSize={400}
      addMargin={addMargin}
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
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id augue varius tortor cursus laoreet. 
      Maecenas sagittis dictum leo, nec sollicitudin libero mattis ut. Integer mauris nisi, molestie vitae 
      mauris eu, egestas feugiat nibh. Fusce tincidunt purus mi, sit amet accumsan enim condimentum id. 
      Etiam vitae ultricies leo. Duis mauris ante, elementum at massa non, egestas luctus mauris. Morbi 
      in luctus lorem, eu cursus mauris. Aliquam vitae porta mi, nec venenatis eros. Sed quis ullamcorper 
      diam. Etiam consectetur, est in lacinia lobortis, massa metus vulputate nisi, eu volutpat mauris urna 
      ac nibh. Fusce egestas quam libero, consectetur iaculis nisl venenatis non. 
    </>
    <>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id augue varius tortor cursus laoreet. 
      Maecenas sagittis dictum leo, nec sollicitudin libero mattis ut. Integer mauris nisi, molestie vitae 
      mauris eu, egestas feugiat nibh.
    </>
    </WorkSection>
  );
}