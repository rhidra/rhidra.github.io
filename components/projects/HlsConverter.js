import { FaDocker, FaNode, FaReact } from "react-icons/fa";
import { SiMysql, SiTypescript } from "react-icons/si";
import ProjectCard from "./ProjectCard";

export default function HlsConverter() {
  return (
    <ProjectCard title="HLS Video Converter API"
                img="img/hls/logo.png"
                type="Fullstack"
                icons={[{
                  icon: FaNode,
                  label: 'NodeJS',
                }, {
                  icon: FaReact,
                  label: 'React',
                }, {
                  icon: SiTypescript,
                  label: 'Typescript',
                }, {
                  icon: SiMysql,
                  label: 'SQL',
                }, {
                  icon: FaDocker,
                  label: 'Docker',
                }]}
                source="https://github.com/rhidra/hls-converter-api"
                link="https://hls-converter.remyhidra.dev">
      A small experiment to try to monetize the video encoding module of Clapback.
      HLS is a video streaming protocol allowing adaptive bitrate live and VOD streaming.
      But few resources exists on how to create a video streaming HLS pipeline.
      With NodeJS, SQLite and FFMPEG, I made a light back-end API using scalable
      Docker containers, capable of converting a MP4 video file to a HLS stream. 
      On the contrary to most video conversion services, this API
      provides a lot of configuration options, including selecting the quality of each
      of the final streams.
      To quickly build the product, I used Rapid API service to register
      my API and handle all the authentication, monetization and quota.
      In order to easily market the API and demonstrate how it works, I built a small front-end
      using React and vanilla CSS.
    </ProjectCard>
  );
}