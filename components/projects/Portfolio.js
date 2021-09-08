import { FaReact } from "react-icons/fa";
import { SiNextDotJs } from "react-icons/si";
import ProjectCard from "./ProjectCard";

export default function Portfolio() {
  return (
    <ProjectCard title="Portfolio"
                type="Frontend Web"
                img="img/portfolio/icon.png"
                icons={[{
                  icon: FaReact,
                  label: 'React',
                }, {
                  icon: SiNextDotJs,
                  label: 'NextJS',
                }]}
                source="https://github.com/rhidra/rhidra.github.io"
                link="https://rhidra.github.io">
      A simple portfolio made with React, NextJS and Chakra UI.
      The goal was to design a good looking app from scratch, without any template or
      strong external reference. The interface should also be SEO optimized and quickly
      readable by a potential client.
    </ProjectCard>
  );
}