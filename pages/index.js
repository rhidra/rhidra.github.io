import { Container, Flex, Heading, Box, Image, Center, Text, Icon, Wrap, WrapItem, Tooltip, Button, DarkMode, Divider, SimpleGrid } from '@chakra-ui/core';
import {FaNode, FaReact, FaAngular, FaDocker, FaPython, FaJs, FaJava, FaBootstrap, FaGithub, FaEnvelope, FaLinkedin} from 'react-icons/fa';
import {DiIonic, DiMongodb, DiDjango, DiNginx} from 'react-icons/di';
import {RiGitBranchFill} from 'react-icons/ri';
import ProjectCard from '../components/project-card';
import ContactForm from '../components/contact-form';
import config from '../config';


const logos = [{
  icon: FaNode,
  tooltip: 'NodeJS',
}, {
  icon: FaReact,
  tooltip: 'ReactJS',
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
  return <Text as="span" color="red.500" {...props}>{props.children}</Text>
}

function Paragraph(props) {
  return <Text mb={3} style={{textIndent: 20}} p={[0, 2]} color="white" {...props}>{props.children}</Text>
}

export default function Home() {
  return (
    <>
    <DarkMode>
      <Flex display={['none', 'flex']} pos="fixed" zIndex="10" w="100%" h="85px" direction="row-reverse" p={4} background="linear-gradient(180deg, rgba(12,11,37,1) 0%, rgba(255,255,255,0) 100%)">
        <Button variant="ghost" mr={3}>
          Contact
        </Button>
        <Button variant="ghost" mr={3}>
          Projects
        </Button>
        <Button variant="ghost" mr={3}>
          About me
        </Button>

        <Flex size="lg" className="social-grp" mr={6}>
          <Button as="a" href={config.email} colorScheme="gray" variant="outline" className="social-btn">
            <Icon as={FaEnvelope}/>
          </Button>
          <Button as="a" href={config.github} target="_blank" colorScheme="gray" variant="outline" className="social-btn">
            <Icon as={FaGithub}/>
          </Button>
          <Button as="a" href={config.linkedin} target="_blank" colorScheme="gray" variant="outline" className="social-btn">
            <Icon as={FaLinkedin}/>
          </Button>
        </Flex>
      </Flex>
    </DarkMode>

    <Container maxWidth="100%" p="0" bg="gray.700">
      <Box w="100%" minHeight="150vh" pt={[5, 100]} pl={[5, 150]} pr={[5, 150]}>
        <Flex color="white" direction={['column', 'row']}>
          <Center mb={[6, 0]}>
            <Image src="img/photo.jpg" alt="Avatar" objectFit="cover" borderRadius="full" boxSize="150px" mr={[0, 6]} boxShadow="-3px 3px 3px #222"/>
          </Center>

          <Flex direction="column" alignItems={['center', 'flex-start']}>
            <Heading textAlign={['center', 'left']} fontSize={['2xl', '4xl']} lineHeight="lg" textShadow="0px 4px 3px #222">
              Hi,<br/> I'm <Strong>Rémy Hidra</Strong> 👋<br/> 
              Let's build something together !
            </Heading>

            <Text mt={2} mb={4} fontSize={['md', 'lg']}>
              <Strong m={[2, 4]}>//</Strong> French 
              <Strong m={[2, 4]}>//</Strong> Freelance
              <Strong m={[2, 4]}>//</Strong> Full-stack web developer
              <Strong m={[2, 4]}>//</Strong>
            </Text>

            <Wrap color="white" spacing={5} justify={['center', 'flex-start']} pb={10}>
              {logos.map((logo, key) => 
                <Tooltip key={key} label={logo.tooltip} hasArrow>
                  <WrapItem>
                      <Icon as={logo.icon} boxSize="50px"/>
                  </WrapItem>
                </Tooltip>
              )}
            </Wrap>
          </Flex>
        </Flex>

        <Flex justify="center">
          <Divider opacity="1" w={['100px', '500px']} mb={12} mt={10} borderBottomWidth="6px" borderColor="red.600"/>
        </Flex>

        <Heading color="red.500" textShadow="0px 3px 3px #111" fontSize={50} mb={6}>
          About me
        </Heading>
        
        <SimpleGrid columns={[1, 1, 2]}>
          <Paragraph>
            I am Rémy, a <Strong>fullstack web developer</Strong> and a part-time student pursuing a Masters degree in Telecommunications 
            and Navigation Systems at <Strong>Shanghai Jiao Tong University</Strong> and <Strong>INSA Lyon</Strong>.
          </Paragraph>
          
          <Paragraph>
            Used to working in an <Strong>Agile environment</Strong>, I value including my client directly in the development process.
            In order to make the most efficient software as possible, I always communicate with everyone in the team.
          </Paragraph>

          <Paragraph>
            Passionate about new technologies, I have self taught myself most skills required to build
            complex infrastructures. With a good experience designing production systems, I am capable of
            building a secure, efficient and responsive <Strong>Web and Mobile based solution</Strong>. 
            I have experience with modern technologies
            like <Strong>NodeJS</Strong>, <Strong>ReactJS</Strong>, <Strong>React-Native</Strong>, <Strong>MongoDB</Strong>, 
            <Strong>Angular</Strong>, <Strong>Ionic</Strong>, <Strong>Python</Strong>, <Strong>Docker</Strong> and <Strong>Sass</Strong>.
          </Paragraph>


          <Paragraph>
            Finally, my academic background gave me strong theoritical knowledge in <Strong>artificial intelligence</Strong>, <Strong>advanced
            communication protocols</Strong> and <Strong>robot navigation</Strong>.
            Not only do I appreciate learning new challenging topics, I believe some beauty can be found in creating elegant 
            solutions to solve complex problems.
          </Paragraph>
        </SimpleGrid>

        <Flex justify="center">
          <Divider opacity="1" w="100px" mb={12} mt={10} borderBottomWidth="6px" borderColor="red.600"/>
        </Flex>

        <Heading color="red.500" textShadow="0px 3px 3px #111" fontSize={50} mb={[6, 3]}>
          Projects
        </Heading>
        <Heading as="h3" color="gray.500" fontSize={20} mb={6} fontStyle="oblique 10deg">
          <Text as="span" display={['none', 'inline']}>Hover </Text> 
          <Text as="span" display={['inline', 'none']}>Click </Text> 
          to see more !
        </Heading>

        <SimpleGrid spacing={4} minChildWidth="400px">
          <ProjectCard title="Peer-to-Peer Chat Web app"
                      img="img/now-chat/cover.png"
                      icons={[FaReact, FaBootstrap]}
                      link="https://now-chat-1.herokuapp.com/"
                      source="https://github.com/rhidra/now-chat">
            A small pet project to learn ReactJS and WebRTC.
            It creates a P2P connection with an another user, using a Node.js signaling server, 
            which can then be used to transmit video, audio or any kind of data. 
            The web app integrates a simple chat room between users.
          </ProjectCard>

          <ProjectCard title="拍手: New Media App in China"
                      img="img/clapback/cover.jpg"
                      icons={[FaAngular, DiIonic, FaNode, DiMongodb, FaDocker, DiNginx]}
                      link="https://zuoyoubycurios.com">
            A new media app, technically similar to TikTok, with social media interactions,
            users video upload and processing and a scalable infrastructure. As the only dev, 
            I had to build an app easy to iterate on and maintain, without any third party
            technologies potentially blocked in China.
          </ProjectCard>

          <ProjectCard title="Kerlead: CRM Mobile App"
                      img="img/kerlead/cover.png"
                      icons={[FaAngular, DiIonic, FaJava, DiMongodb]}
                      link="https://kerlead.fr">
            I built a CRM mobile app, and connected it to its Java back-end API.
            Using Ionic 4 and Angular 2, the UI is efficient, inspired by the 
            current CRM web app, but adapted to a mobile environment. 
            The app was be tested on Android and iOS, on smartphone and tablet. 
          </ProjectCard>

          <ProjectCard title="Media la Mouette Web platform"
                      img="img/mouette/cover.png"
                      icons={[FaPython, DiDjango, FaJs]}
                      link="https://medialamouette.fr">
            A small platform for video gear management, for a small collective.
            The app is used to register and rent video gear and manage projects.
            It also features automatic PDF generation of invoices and payments. 
            To coordinate the system through users, we implemented email and discord notifications.
          </ProjectCard>
        </SimpleGrid>

        <Flex justify="center">
          <Divider opacity="1" w="100px" mb={12} mt={12} borderBottomWidth="6px" borderColor="red.600"/>
        </Flex>

        <Heading color="red.500" textShadow="0px 3px 3px #111" fontSize={50} mb={6}>
          Contact
        </Heading>

        <Flex direction={['column', 'row']}>
          <Box flex={0.7} pr={10}>
            <ContactForm/>
          </Box>
        </Flex>
        
        <Flex justify="center">
          <Divider opacity="1" w="100px" mb={10} mt={10} borderBottomWidth="6px" borderColor="red.600"/>
        </Flex>

        <Flex size="lg" justify="center" pb={10}>
          <Box className="social-grp">
            <Button as="a" href={config.email} colorScheme="gray" variant="outline" className="social-btn">
              <Icon boxSize="23px" as={FaEnvelope}/>
            </Button>
            <Button as="a" href={config.github} target="_blank" colorScheme="gray" variant="outline" className="social-btn">
              <Icon boxSize="23px" as={FaGithub}/>
            </Button>
            <Button as="a" href={config.linkedin} target="_blank" colorScheme="gray" variant="outline" className="social-btn">
              <Icon boxSize="23px" as={FaLinkedin}/>
            </Button>
          </Box>
        </Flex>
      </Box>
    </Container>
    </>
  )
}
