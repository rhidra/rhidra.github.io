import { Container, Flex, Heading, Box, Divider, Button } from '@chakra-ui/core';
import Link from 'next/link'
import ContactForm from '../components/ContactForm';
import Skills from '../components/skills';
import Wave from '../components/Wave';
import Navbar from '../components/layout/Navbar';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Education from '../components/education';
import FluidSimulation from '../components/projects/FluidSimulation';
import RayMarching from '../components/projects/RayMarching';
import HlsConverter from '../components/projects/HlsConverter';
import { Clapback } from '../components/works/Clapback';
import { Nestaur } from '../components/works/Nestaur';
import { Thesis } from '../components/works/Thesis';
import { WorkOthers } from '../components/works/WorkOthers';
import { About } from '../components/About';
import { MorganStanley } from '../components/works/MorganStanley';

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

        <Heading id="work" color="red.500" textShadow="0px 3px 3px #111" fontSize={50} mt={24} mb={12} lineHeight="3.5rem">
          Work Experiences
        </Heading>

        <Flex flexDir="column" alignItems="center">
          <MorganStanley addMargin={true}/>
          <Clapback addMargin={true}/>
          <Nestaur addMargin={true}/>
          <Thesis/>
        </Flex>
      </Box>

      <Box w="100%" mt={24}/>

      <Box w="100%" mt={10}>
        <WorkOthers/>
      </Box>

      <Box w="100%" px={[5, 5, 5, 5, 150]}>
        <Flex justify="center" id="projects">
          <Divider opacity="1" w="100px" mb={[10, 12]} mt={[6, 12]} borderBottomWidth="3px" borderTopWidth="3px" borderRadius="20px" borderColor="red.600"/>
        </Flex>

        <Heading color="red.500" textShadow="0px 3px 3px #111" fontSize={50} mt={6} mb={2}>
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
            <Button colorScheme="gray" cursor="pointer" className="btn" variant="outline" as="span" href="">
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

        <Flex justify="center" id="about">
          <Divider opacity="1" w="100px" mb={[10, 12]} mt={[6, 12]} borderBottomWidth="3px" borderTopWidth="3px" borderRadius="20px" borderColor="red.600"/>
        </Flex>

        <Heading color="red.500" textShadow="0px 3px 3px #111" fontSize={50} mt={6} mb={8}>
          About me
        </Heading>

        <About/>

        <Flex justifyContent="center">
          <a href="/cv.pdf" download="Resume - Remy Hidra">
            <Button colorScheme="gray" cursor="pointer" className="btn" variant="outline" as="span" href="">
              Check out my resume !
            </Button>
          </a>
        </Flex>

        <Flex justify="center" id="contact">
          <Divider opacity="1" w="100px" mb={[10, 12]} mt={[6, 12]} borderBottomWidth="3px" borderTopWidth="3px" borderRadius="20px" borderColor="red.600"/>
        </Flex>

        <Heading color="red.500" textShadow="0px 3px 3px #111" fontSize={50} mb={12}>
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
