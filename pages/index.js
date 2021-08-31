import { Container, Flex, Heading, Box, Image, Center, Text, Icon, Wrap, WrapItem, Tooltip, Button, DarkMode, Divider, SimpleGrid, ButtonGroup } from '@chakra-ui/core';
import {FaNode, FaReact, FaAngular, FaDocker, FaPython, FaJs, FaJava, FaBootstrap, FaGithub, FaEnvelope, FaLinkedin, FaAndroid, FaApple} from 'react-icons/fa';
import {DiIonic, DiMongodb, DiDjango, DiNginx, DiJavascript1} from 'react-icons/di';
import {RiGitBranchFill, RiFlutterFill} from 'react-icons/ri';
import {SiNextDotJs, SiFirebase, SiRedux, SiSass, SiHeroku, SiGooglecloud, SiMaterialUi, SiMysql, SiWebgl, SiWebpack, SiTypescript} from 'react-icons/si';
import ProjectCard from '../components/project-card';
import ContactForm from '../components/contact-form';
import config from '../config';


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

function Strong(props) {
  return <Text as="span" color="grey.100" fontWeight="bold" {...props}>{props.children}</Text>
}

function Paragraph(props) {
  return <Text mb={3} style={{textIndent: 20}} p={[0, 2]} color="grey.300" maxW="50ch" {...props}>{props.children}</Text>
}

export default function Home() {
  return (
    <>
    <DarkMode>
      <Flex display={['none', 'flex']} pos="fixed" zIndex="10" w="100%" h="85px" direction="row-reverse" p={4} 
            background="linear-gradient(180deg, rgba(44, 44, 45, 0.37) 0%, rgba(255,255,255,0) 100%)">
        <Button variant="ghost" mr={3} as="a" href="#contact">
          Contact
        </Button>
        <Button variant="ghost" mr={3} as="a" href="#projects">
          Projects
        </Button>
        <Button variant="ghost" mr={3} as="a" href="#about">
          About me
        </Button>

        <Flex size="lg" mr={6}>
          <ButtonGroup isAttached className="social-grp" colorScheme="gray" variant="outline">
            <Button as="a" href={config.email} className="social-btn">
              <Icon as={FaEnvelope}/>
            </Button>
            <Button as="a" href={config.github} target="_blank" className="social-btn">
              <Icon as={FaGithub}/>
            </Button>
            <Button as="a" href={config.linkedin} target="_blank" className="social-btn">
              <Icon as={FaLinkedin}/>
            </Button>
          </ButtonGroup>
        </Flex>
      </Flex>
    </DarkMode>

    <Container  maxWidth="100%" p="0" bg="grey.200">
      <Box w="100%" pt={[10, 10, 56]} pb={[0, 0, 40]} pl={[5, null, null, null, 80]} pr={5}>
        <Flex color="grey.800" direction={['column', 'column', 'row']} justifyContent={['center', null, null, null, 'start']}>
          <Center mb={[14, 14, 0]} mr={[0, 0, 5, 20]} alignSelf={['center', 'center', 'flex-start']}>
            <Image src="img/photo.jpg" alt="Avatar" color="grey.200" objectFit="cover" borderRadius="full" boxSize={["200px", '250px', '200px', "250px"]} boxShadow="-3px 3px 3px #222"/>
          </Center>

          <Flex direction="column" alignItems={['center', 'center', 'flex-start']}>
            <Heading textAlign={['center', 'center', 'left']} fontSize={['2xl', '4xl', '2xl', '4xl']} lineHeight={['', '', '', '4rem']} textShadow="0px 1px 1px HSL(34, 10%, 52%)">
              Hi,
              <br/> 
              I'm&nbsp;
              <Text as="span" color="red.500">Rémy Hidra</Text>&nbsp; 
              <Text as="span" textShadow="1px 1px 4px HSL(34, 10%, 52%)">👋</Text>
              <br/> 
              Let's build your <Text as="span" color="red.500">app</Text> together !
            </Heading>

            <Text mt={[10, 6]} mb={[12, 10]} fontSize={['md', 'lg']} textAlign={['center', 'center', 'left']}>
              <Text as="span" display={['inline', 'inline', 'block', 'inline']} mb={4}>
                <Text as="span" display={['block', 'block', 'inline']} mb={4}>
                  <Strong m={[2, 4]} color="red.500">//</Strong>
                  &nbsp;French&nbsp;
                  <Strong m={[2, 4]} color="red.500" display={['inline', 'inline', 'none']}>//</Strong>
                </Text>

                <Text as="span" display={['block', 'block', 'inline']} mb={4}>
                  <Strong m={[2, 4]} color="red.500">//</Strong>
                  &nbsp;Freelance&nbsp;
                  <Strong m={[2, 4]} color="red.500" display={['inline', 'inline', 'inline', 'none']}>//</Strong>
                </Text>
              </Text>
              
              <Strong m={[2, 4]} color="red.500">//</Strong>
              &nbsp;Mobile App Developer&nbsp;
              <Strong m={[2, 4]} color="red.500">//</Strong>
            </Text>

            <Wrap color="white" spacing={5} justify={['center', 'flex-start']} pb={[2, 10]}>
              {logos.map((logo, key) => 
                <Tooltip key={key} label={logo.tooltip} hasArrow>
                  <WrapItem>
                    <Icon as={logo.icon} boxSize="50px" color="grey.800"/>
                  </WrapItem>
                </Tooltip>
              )}
            </Wrap>
          </Flex>
        </Flex>
      </Box>
    </Container>
    
    <Box bg="purple.900" w="full" overflow="hidden">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" height="150" width="100%">
        <path fill="HSL(30, 22%, 91%)" d="M0,160L21.8,144C43.6,128,87,96,131,112C174.5,128,218,192,262,213.3C305.5,235,349,213,393,170.7C436.4,128,480,64,524,53.3C567.3,43,611,85,655,138.7C698.2,192,742,256,785,272C829.1,288,873,256,916,245.3C960,235,1004,245,1047,213.3C1090.9,181,1135,107,1178,96C1221.8,85,1265,139,1309,144C1352.7,149,1396,107,1418,85.3L1440,64L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z">
          <animate repeatCount="indefinite" attributeName="d" dur="20s"
            values="
            M0,160L21.8,144C43.6,128,87,96,131,112C174.5,128,218,192,262,213.3C305.5,235,349,213,393,170.7C436.4,128,480,64,524,53.3C567.3,43,611,85,655,138.7C698.2,192,742,256,785,272C829.1,288,873,256,916,245.3C960,235,1004,245,1047,213.3C1090.9,181,1135,107,1178,96C1221.8,85,1265,139,1309,144C1352.7,149,1396,107,1418,85.3L1440,64L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z;
            M0,96L21.8,106.7C43.6,117,87,139,131,154.7C174.5,171,218,181,262,197.3C305.5,213,349,235,393,213.3C436.4,192,480,128,524,101.3C567.3,75,611,85,655,106.7C698.2,128,742,160,785,160C829.1,160,873,128,916,101.3C960,75,1004,53,1047,74.7C1090.9,96,1135,160,1178,160C1221.8,160,1265,96,1309,74.7C1352.7,53,1396,75,1418,85.3L1440,96L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z;
            M0,160L21.8,144C43.6,128,87,96,131,101.3C174.5,107,218,149,262,181.3C305.5,213,349,235,393,250.7C436.4,267,480,277,524,245.3C567.3,213,611,139,655,106.7C698.2,75,742,85,785,101.3C829.1,117,873,139,916,144C960,149,1004,139,1047,122.7C1090.9,107,1135,85,1178,101.3C1221.8,117,1265,171,1309,202.7C1352.7,235,1396,245,1418,250.7L1440,256L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z;
            M0,288L21.8,288C43.6,288,87,288,131,272C174.5,256,218,224,262,192C305.5,160,349,128,393,112C436.4,96,480,96,524,122.7C567.3,149,611,203,655,229.3C698.2,256,742,256,785,250.7C829.1,245,873,235,916,208C960,181,1004,139,1047,117.3C1090.9,96,1135,96,1178,85.3C1221.8,75,1265,53,1309,69.3C1352.7,85,1396,139,1418,165.3L1440,192L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z;
            M0,160L21.8,144C43.6,128,87,96,131,112C174.5,128,218,192,262,213.3C305.5,235,349,213,393,170.7C436.4,128,480,64,524,53.3C567.3,43,611,85,655,138.7C698.2,192,742,256,785,272C829.1,288,873,256,916,245.3C960,235,1004,245,1047,213.3C1090.9,181,1135,107,1178,96C1221.8,85,1265,139,1309,144C1352.7,149,1396,107,1418,85.3L1440,64L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z"
          />
        </path>
      </svg>
    </Box>

    <Container maxWidth="100%" p="0" bg="purple.900">
      <Box w="100%" minHeight="150vh" pt={[5, 100]} pl={[5, 5, 5, 5, 150]} pr={[5, 5, 5, 5, 150]}>

        <Heading id="projects" color="red.500" textShadow="0px 3px 3px #111" fontSize={50} mb={12}>
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
                      icons={[FaAngular, DiIonic, FaJava, DiMongodb]}
                      link="https://kerlead.fr">
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

        <Heading id="about" color="red.500" textShadow="0px 3px 3px #111" fontSize={50} mt={6} mb={8}>
          About me
        </Heading>
        
        <SimpleGrid columns={[1, 1, 2]} mb={12} justifyItems="center">
          <Paragraph textAlign={['left', null, 'justify']} justifySelf={['center', null, 'end']} mr={[0, null, null, null, 5]}>
            I am Rémy, a <Strong>fullstack web developer</Strong> and a part-time student pursuing a Masters degree in Telecommunications 
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
