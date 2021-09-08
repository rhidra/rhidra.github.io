import { DiDjango } from "react-icons/di";
import { FaJs, FaPython } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import ProjectCard from "./ProjectCard";

export default function Mouette() {
  return (
    <ProjectCard title="Media la Mouette Web platform"
                type="Backend"
                img="img/mouette/icon.png"
                icons={[{
                  icon: FaPython,
                  label: 'Python',
                }, {
                  icon: DiDjango,
                  label: 'Django',
                }, {
                  icon: SiMysql,
                  label: 'SQL',
                }, {
                  icon: FaJs,
                  label: 'Javascript',
                }]}
                link="https://medialamouette.fr">
      A small platform for video gear management, for a small collective.
      The app is used to register and rent video gear and manage projects.
      It also features automatic PDF generation of invoices and payments. 
      To coordinate the system through users, we implemented email and discord notifications.
    </ProjectCard>
  );
}