import { DiDjango } from "react-icons/di";
import { FaJs, FaPython } from "react-icons/fa";
import ProjectCard from "./ProjectCard";

export default function Mouette() {
  return (
    <ProjectCard title="Media la Mouette Web platform"
                type="Backend"
                img="img/mouette/icon.png"
                icons={[FaPython, DiDjango, FaJs]}
                link="https://medialamouette.fr">
      A small platform for video gear management, for a small collective.
      The app is used to register and rent video gear and manage projects.
      It also features automatic PDF generation of invoices and payments. 
      To coordinate the system through users, we implemented email and discord notifications.
    </ProjectCard>
  );
}