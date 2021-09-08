import { FaAndroid, FaApple } from "react-icons/fa";
import { RiFlutterFill } from "react-icons/ri";
import { SiFirebase } from "react-icons/si";
import ProjectCard from "./ProjectCard";

export default function NowTalk() {
  return (
    <ProjectCard title="Real-time Chat Mobile app"
                img="img/now-chat/icon.png"
                type="Frontend Mobile"
                icons={[{
                  icon: RiFlutterFill,
                  label: 'Flutter',
                }, {
                  icon: SiFirebase,
                  label: 'Firebase',
                }, {
                  icon: FaAndroid,
                  label: 'Android',
                }, {
                  icon: FaApple,
                  label: 'iOS',
                }]}
                source="https://github.com/rhidra/now-talk">
      A pet project to learn Flutter, Firebase and Cloud Firestore.
      It uses the Firebase Real-Time services to easily build a Mobile app
      Chat UI. It allows for multiple user registration and real-time messaging
      between two users. The app is cross-platform, with a flexible interface and could be
      expanded into a much more complex mobile app.
    </ProjectCard>
  );
}