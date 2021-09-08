import { DiJavascript1 } from "react-icons/di";
import { SiTypescript, SiWebgl, SiWebpack } from "react-icons/si";
import ProjectCard from "./ProjectCard";

export default function FluidSimulation() {
  return (
    <ProjectCard title="Fluid Simulation Experiment"
                img="img/fluid/icon.png"
                type="Frontend"
                icons={[DiJavascript1, SiTypescript, SiWebgl, SiWebpack]}
                source="https://github.com/rhidra/fluid-simulation"
                link="https://rhidra.github.io/fluid-simulation">
      A fun experiment between fluid mechanics and generative art. To make the 
      program run in real-time at full resolution, I had to make all the computations
      run on the client GPU, using the native WebGL API. I implemented the algorithm
      on sequential shaders operations. To make the app as light as possible,
      only vanilla JS was used, compiled from Typescript using a small Webpack configuration.
    </ProjectCard>
  );
}