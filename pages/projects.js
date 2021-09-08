import { Box, Button, Container, Flex, Heading } from "@chakra-ui/core";
import {FaNode, FaReact, FaAngular, FaDocker, FaPython, FaJs, FaAndroid, FaApple} from 'react-icons/fa';
import {DiIonic, DiMongodb, DiDjango, DiNginx, DiJavascript1} from 'react-icons/di';
import {RiFlutterFill} from 'react-icons/ri';
import {SiNextDotJs, SiFirebase, SiRedux, SiSass, SiHeroku, SiGooglecloud, SiMaterialUi, SiMysql, SiWebgl, SiWebpack, SiTypescript} from 'react-icons/si';
import ProjectCard from "../components/ProjectCard";
import Link from "next/link";

export default function Projects() {
  return (
    <>
    <Container maxWidth="100%" p="0" bg="purple.900">
      <Box w="100%" minHeight="150vh" pt={[5, 8]} px={[10]}>

        <Link href="/">
          <Button colorScheme="gray" cursor="pointer" className="btn" variant="outline" mr={3} as="span" href="">
            More projects !
          </Button>
        </Link>

        <Heading color="red.500" textShadow="0px 3px 3px #111" fontSize={50} mt={12} mb={2}>
          Projects
        </Heading>

        <Heading as="h3" color="gray.500" fontSize={20} mb={12} fontStyle="oblique 10deg">
          Side projects and student works
        </Heading>

        <Flex flexDir="column" alignItems="center" overflow="auto">
          <ProjectCard title="HLS Converter API"
                      img="img/hls/logo.png"
                      type="Fullstack"
                      icons={[FaNode, FaReact, SiTypescript, SiMysql, FaDocker]}
                      source="https://github.com/rhidra/hls-converter-api"
                      link="https://hls-converter.com">
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

          <ProjectCard title="Real-time Chat Mobile app"
                      img="img/now-chat/icon.png"
                      type="Frontend Mobile"
                      icons={[RiFlutterFill, SiFirebase, FaAndroid, FaApple]}
                      source="https://github.com/rhidra/now-talk">
            A pet project to learn Flutter, Firebase and Cloud Firestore.
            It uses the Firebase Real-Time services to easily build a Mobile app
            Chat UI. It allows for multiple user registration and real-time messaging
            between two users. The app is cross-platform, with a flexible interface and could be
            expanded into a much more complex mobile app.
          </ProjectCard>

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

          <ProjectCard title="Portfolio"
                      type="Frontend Web"
                      img="img/portfolio/icon.png"
                      icons={[FaReact, SiNextDotJs]}
                      source="https://github.com/rhidra/rhidra.github.io"
                      link="https://rhidra.github.io">
            A simple portfolio made with React, NextJS and Chakra UI.
            The goal was to design a good looking app from scratch, without any template or
            strong external reference. The interface should also be SEO optimized and quickly
            readable by a potential client.
          </ProjectCard>

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
        </Flex>
      </Box>
    </Container>
    </>
  );
}