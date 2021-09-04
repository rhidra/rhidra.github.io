import { Container, Flex, Heading, Box, Image, Center, Text, Icon, Wrap, WrapItem, Tooltip, Button, DarkMode, Divider, SimpleGrid, ButtonGroup } from '@chakra-ui/core';
import {FaNode, FaReact, FaAngular, FaDocker, FaPython, FaJs, FaJava, FaBootstrap, FaGithub, FaEnvelope, FaLinkedin, FaAndroid, FaApple} from 'react-icons/fa';
import {DiIonic, DiMongodb, DiDjango, DiNginx, DiJavascript1} from 'react-icons/di';
import {RiGitBranchFill, RiFlutterFill} from 'react-icons/ri';
import {SiNextDotJs, SiFirebase, SiRedux, SiSass, SiHeroku, SiGooglecloud, SiMaterialUi, SiMysql, SiWebgl, SiWebpack, SiTypescript} from 'react-icons/si';
import ProjectCard from '../components/ProjectCard';
import ContactForm from '../components/ContactForm';
import config from '../config';
import Skills from '../components/skills';
import Wave from '../components/Wave';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import { Paragraph, Strong } from "../components/typography";


const logos = [{
  icon: FaReact,
  tooltip: 'React-Native',
}, {
  icon: RiFlutterFill,
  tooltip: 'Flutter',
}, {
  icon: SiRedux,
  tooltip: 'Redux',
}, {
  icon: FaNode,
  tooltip: 'NodeJS',
}, {
  icon: SiFirebase,
  tooltip: 'Firebase',
}, {
  icon: FaAngular,
  tooltip: 'Angular',
}, {
  icon: DiMongodb,
  tooltip: 'MongoDB',
}, {
  icon: FaDocker,
  tooltip: 'Docker',
}, {
  icon: RiGitBranchFill,
  tooltip: 'Git',
}];

export default function Home() {
  return (
    <>
    <Navbar/>

    <Header/>
    
    <Wave/>

    <Container maxWidth="100%" p="0" bg="purple.900">
      <Box w="100%" minHeight="150vh" pt={[5, 100]} pl={[5, 5, 5, 5, 150]} pr={[5, 5, 5, 5, 150]}>

        <Heading id="skills" color="red.500" textShadow="0px 3px 3px #111" fontSize={50} mb={12}>
          Tech Skills
        </Heading>

        <Skills/>

        <Heading id="projects" color="red.500" textShadow="0px 3px 3px #111" fontSize={50} mt={8} mb={12}>
          Projects
        </Heading>

        <Flex flexDir="column" alignItems="center" overflow="auto">

          <ProjectCard title="拍手: New Media App in China"
                      type="Fullstack"
                      img="img/clapback/icon.png"
                      icons={[FaAngular, DiIonic, FaNode, DiMongodb, FaDocker, DiNginx, SiGooglecloud]}
                      link="https://zuoyoubycurios.com">
            A new media app, technically similar to TikTok, with social media interactions,
            users video upload and processing and a scalable infrastructure. As the only dev, 
            I had to build an app easy to iterate on and maintain, without any third party
            technologies potentially blocked in China.
          </ProjectCard>

          <ProjectCard title="Kerlead: CRM Mobile App"
                      type="Frontend Mobile & Web"
                      img="img/kerlead/cover.png"
                      icons={[FaAngular, DiIonic, FaJava, DiMongodb]}>
            I built a CRM mobile app, and connected it to its Java back-end API.
            Using Ionic 4 and Angular 2, the UI is efficient, inspired by the 
            current CRM web app, but adapted to a mobile environment. 
            The app was be tested on Android and iOS, on smartphone and tablet. 
          </ProjectCard>

          <ProjectCard title="HLS Converter API"
                      img="img/hls/logo.png"
                      type="Fullstack"
                      icons={[FaNode, FaReact, SiTypescript, SiMysql]}
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

          <ProjectCard title="MasterMined: AI legal document organizer"
                      type="Frontend Web"
                      img="img/mastermined/logo.png"
                      icons={[FaReact, SiNextDotJs, SiMaterialUi, SiHeroku]}>
            To start selling their solution, the MasterMined startup, based in the US,
            needed an interface to connect to their AI powered backend API.
            Because of future interviews with investors, they needed a functionnal
            demo in less than two weeks. I helped them reach that goal.<br/> 
            Targeted at lawyers and legal professionals, the UI needed to be clean,
            easily understandable and responsive. From a design mockup, I
            built the entire frontend as a React/NextJS Web app. It features a full authentication
            system, a multiple file uploader for AI analysis, and various document
            organizer and visualization solutions.<br/>
            Thanks to NextJS capabilities, the app was made very quickly, while staying
            very fast and scalable. It was first deployed on a free Heroku server, to
            be used as a small demo system, but can then be deployed on a CDN, for a very
            fast worldwide delivery.<br/>
            Since my contribution, MasterMined past their first round of seed investment.
            They are now expanding the app even more.
          </ProjectCard>

          <ProjectCard title="Time tracker Web App"
                      type="Fullstack"
                      img="img/rnd4impact/icon.png"
                      icons={[FaReact, FaBootstrap, FaNode, DiMongodb, DiNginx]}
                      link="https://time-tracker-rnd4impact.herokuapp.com/">
            To manage work time between their volunteers, the non-profit RND4IMPACT used to write
            check-in and check-out time on paper. With the Covid pandemic, they were forced to go
            remote. They needed an official ID verification method, so common time tracking software
            was not an option. I designed for them a custom responsive time tracking web app,
            with official international ID verification, work contract e-signature, check-in/check-out,
            and administration at different level of authorization.
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

        <Heading id="education" color="red.500" textShadow="0px 3px 3px #111" fontSize={50} mt={6} mb={8}>
          Education
        </Heading>

        <Heading id="about" color="red.500" textShadow="0px 3px 3px #111" fontSize={50} mt={6} mb={8}>
          About me
        </Heading>
        
        <SimpleGrid columns={[1, 1, 2]} mb={12} justifyItems="center">
          <Paragraph textAlign={['left', null, 'justify']} justifySelf={['center', null, 'end']} mr={[0, null, null, null, 5]}>
            I am Rémy, a <Strong>software engineer</Strong> and a part-time student pursuing a Masters degree in Telecommunications 
            and Navigation Systems at <Strong>Shanghai Jiao Tong University</Strong> and <Strong>INSA Lyon</Strong>.
          </Paragraph>
          
          <Paragraph textAlign={['left', null, 'justify']} justifySelf={['center', null, 'start']} ml={[0, null, null, null, 5]}>
            Used to working in an <Strong>Agile environment</Strong>, I value including my client directly in the development process.
            In order to make the most efficient software as possible, I always communicate with everyone in the team.
          </Paragraph>

          <Paragraph textAlign={['left', null, 'justify']} justifySelf={['center', null, 'end']} mr={[0, null, null, null, 5]}>
            Passionate about new technologies, I have self taught myself most skills required to build
            complex infrastructures. With a good experience designing production systems, I am capable of
            building a secure, efficient and responsive <Strong>Web and Mobile based solution</Strong>. 
            I have experience with modern technologies
            like <Strong>NodeJS</Strong>, <Strong>ReactJS</Strong>, <Strong>React-Native</Strong>, <Strong>MongoDB</Strong>, 
            <Strong> Angular</Strong>, <Strong>Ionic</Strong>, <Strong>Python</Strong>, <Strong>Docker</Strong> and <Strong>Sass</Strong>.
          </Paragraph>

          <Paragraph textAlign={['left', null, 'justify']} justifySelf={['center', null, 'start']} ml={[0, null, null, null, 5]}>
            Finally, my academic background gave me strong theoritical knowledge in <Strong>artificial intelligence</Strong>, <Strong>advanced
            communication protocols</Strong> and <Strong>robot navigation</Strong>.
            Not only do I appreciate learning new challenging topics, I believe some beauty can be found in creating elegant 
            solutions to solve complex problems.
          </Paragraph>
        </SimpleGrid>

        <Heading id="contact" color="red.500" textShadow="0px 3px 3px #111" fontSize={50} mb={12}>
          Contact
        </Heading>

        <Flex justify="center">
          <Box w="xl">
            <ContactForm/>
          </Box>
        </Flex>
        
        <Flex justify="center">
          <Divider opacity="1" w="100px" mb={12} mt={12} borderBottomWidth="3px" borderTopWidth="3px" borderRadius="20px" borderColor="red.600"/>
        </Flex>

        <Center size="lg" pb={10}>
          <ButtonGroup isAttached className="social-grp" variant="outline" color="grey.200">
            <Button as="a" href={config.email} className="social-btn" w={20} h={12}>
              <Icon boxSize="23px" as={FaEnvelope}/>
            </Button>
            <Button as="a" href={config.github} target="_blank" className="social-btn" w={20} h={12}>
              <Icon boxSize="23px" as={FaGithub}/>
            </Button>
            <Button as="a" href={config.linkedin} target="_blank" className="social-btn" w={20} h={12}>
              <Icon boxSize="23px" as={FaLinkedin}/>
            </Button>
          </ButtonGroup>
        </Center>
      </Box>
    </Container>
    </>
  );
}
