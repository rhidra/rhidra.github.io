import { Container, Flex, Heading, Box, SimpleGrid, Text, Divider, Button, Image } from '@chakra-ui/core';
import Link from 'next/link'
import ContactForm from '../components/ContactForm';
import Skills from '../components/skills';
import Wave from '../components/Wave';
import Navbar from '../components/layout/Navbar';
import Header from '../components/layout/Header';
import { Paragraph, Strong } from "../components/typography";
import Footer from '../components/layout/Footer';
import Education from '../components/education';
import Mouette from '../components/projects/Mouette';
import FluidSimulation from '../components/projects/FluidSimulation';
import RayMarching from '../components/projects/RayMarching';
import HlsConverter from '../components/projects/HlsConverter';
import { Clapback } from '../components/works/Clapback';
import { Nestaur } from '../components/works/Nestaur';
import { Thesis } from '../components/works/Thesis';
import { WorkOthers } from '../components/works/WorkOthers';

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

        <Heading id="work" color="red.500" textShadow="0px 3px 3px #111" fontSize={50} mt={8} mb={12} lineHeight="3.5rem">
          Work Experiences
        </Heading>

        <Flex flexDir="column" alignItems="center">
          <Clapback addMargin={true}/>
          <Nestaur addMargin={true}/>
          <Thesis/>
        </Flex>
      </Box>

      <Box w="100%" mt={10}>
        <WorkOthers/>
      </Box>

      <Box w="100%" px={[5, 5, 5, 5, 150]}>
        <Heading id="projects" color="red.500" textShadow="0px 3px 3px #111" fontSize={50} mt={8} mb={2}>
          Projects
        </Heading>

        <Heading as="h3" color="gray.500" fontSize={20} mb={12} fontStyle="oblique 10deg">
          Side projects and student works
        </Heading>

        <Flex flexDir="column" alignItems="center" overflow="auto">
          <HlsConverter/>
          <FluidSimulation/>
          <RayMarching/>

          <Link href="/projects">
            <Button colorScheme="gray" cursor="pointer" className="btn" variant="outline" mr={3} as="span" href="">
              More projects !
            </Button>
          </Link>
        </Flex>

        <Flex justify="center" id="education">
          <Divider opacity="1" w="100px" mb={[10, 12]} mt={[6, 12]} borderBottomWidth="3px" borderTopWidth="3px" borderRadius="20px" borderColor="red.600"/>
        </Flex>

        <Heading color="red.500" textShadow="0px 3px 3px #111" fontSize={50} mt={6} mb={8}>
          Education
        </Heading>

        <Education/>

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
        
        <Footer/>
      </Box>
    </Container>
    </>
  );
}
