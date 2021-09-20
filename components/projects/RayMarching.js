import { DiJavascript1 } from "react-icons/di";
import { SiTypescript, SiWebgl, SiWebpack } from "react-icons/si";
import ProjectCard from "./ProjectCard";

export default function RayMarching() {
  return (
    <ProjectCard title="Ray Marching 3D Procedural Environment"
                img="img/ray-marching/logo.png"
                type="Frontend Web"
                icons={[{
                  icon: DiJavascript1,
                  label: 'Javascript',
                }, {
                  icon: SiTypescript,
                  label: 'Typescript',
                }, {
                  icon: SiWebgl,
                  label: 'WebGL',
                }, {
                  icon: SiWebpack,
                  label: 'Webpack',
                }]}
                source="https://github.com/rhidra/ray-marching"
                link="https://rhidra.github.io/ray-marching">
      <strong>This live demo does not work with touch screens and mobile devices.</strong><br/>
      A fun project to try building a procedurally generated 3D environment, using as few libraries as possible.
      Using WebGL, I built a small ray marching renderer. After experimenting with various scenes and 2D fractals,
      I used a 2D fractional brownian motion noise texture to generate a 3D environment. I had to optimize the basic
      ray marching algorithm, to support displaying a larger world, while shading it in real-time.
      I also experimented with multiple basic shading methods. The entire environment is generated from mathematical
      functions, and does not use any external texture or resources.
    </ProjectCard>
  );
}