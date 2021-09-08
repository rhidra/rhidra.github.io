import { FaReact } from "react-icons/fa";
import { SiHeroku, SiRedux, SiSass } from "react-icons/si";
import ProjectCard from "./ProjectCard";

export default function NowChat() {
  return (
    <ProjectCard title="Peer-to-Peer Chat Web app"
                img="img/now-chat/icon2.png"
                type="Fullstack"
                icons={[FaReact, SiRedux, SiSass, SiHeroku]}
                link="https://now-chat-1.herokuapp.com/"
                source="https://github.com/rhidra/now-chat">
      A small pet project to learn ReactJS and WebRTC.
      It creates a P2P connection with an another user, using a Node.js signaling server, 
      which can then be used to transmit video, audio or any kind of data. 
      The web app integrates a simple chat room between users.
    </ProjectCard> 
  );
}