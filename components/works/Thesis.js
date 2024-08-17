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
      isRight={false}
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
      For my Master Thesis at SJTU, I worked on building a flexible <strong>UAV navigation system</strong>.
      The algorithm works in simulation in <strong>real-time</strong> and is optimized for <strong>re-planning</strong> scenarios.
      It implements an incremental global planner based on the path planning <strong>3D Phi*</strong> algorithm, which
      is ideal for large and partially known environments.<br/>
      We also implemented a local planner based on a fast <strong>motion primitive generation</strong> algorithm and
      a <strong>sequential optimization</strong> method, which has a fast convergence and an easily tunable cost function.<br/>
      We evaluated this framework in a large <strong>benchmark</strong>, with our own experimental protocol, and obtained
      very satisfying results. Thanks to our flexible implementation, using ROS, PX4 and MAVROS, our 
      algorithm could be easily used with a real-world UAV without changing the module too much.
    </>
    <>
      For my Master Thesis at SJTU, I worked on building a flexible <strong>UAV navigation system</strong>.
      The algorithm works in simulation in <strong>real-time</strong> and is optimized for <strong>re-planning</strong> scenarios.
    </>
    </WorkSection>
  );
}