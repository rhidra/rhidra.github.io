import { Container, Flex, Heading, Box, Image, Center, List, ListItem, ListIcon, Text, HStack, Icon, Wrap, WrapItem, Tooltip, Button, DarkMode, Divider, Progress } from '@chakra-ui/core';
import {FaNode, FaReact, FaAngular, FaDocker} from 'react-icons/fa';
import {DiMongodb} from 'react-icons/di';
import {RiGitBranchFill} from 'react-icons/ri';


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

export default function Home() {
  return (
    <>
    <DarkMode>
      <Flex display={['none', 'flex']} pos="fixed" zIndex="10" w="100%" h="50px" direction="row-reverse" p={4}>
        <Button variant="ghost" mr={3}>
          Contact
        </Button>
        <Button variant="ghost" mr={3}>
          Projects
        </Button>
        <Button variant="ghost" mr={3}>
          About me
        </Button>
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
              <Strong m={[2, 4]}>//</Strong>
              French 
              <Strong m={[2, 4]}>//</Strong>
              Freelance
              <Strong m={[2, 4]}>//</Strong>
              Full-stack web developer
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

        <Divider mb={12}/>

        <Heading color="red.500" textShadow="0px 3px 3px #111" fontSize={50} mb={6}>
          About me
        </Heading>
        
        <Flex direction={['column', 'row']} textShadow="1px 1px 1px #222">
          <Text color="white" flex={.5} p={[0, 4]}>
            <Text mb={6} style={{textIndent: 20}}>
            I am Rémy, a <Strong>fullstack web developer</Strong> and a part-time student pursuing a Masters degree in Telecommunications 
            and Navigation Systems at <Strong>Shanghai Jiao Tong University</Strong> and <Strong>INSA Lyon</Strong>.
            </Text>
            
            <Text style={{textIndent: 20}}>
            Passionate about new technologies, I have self taught myself most skills required to build
            complex infrastructures. With a good experience designing production systems, I am capable of
            building a secure, efficient and responsive <Strong>Web and Mobile based solution</Strong>. 
            I have experience with modern technologies
            like <Strong>NodeJS</Strong>, <Strong>ReactJS</Strong>, <Strong>React-Native</Strong>, <Strong>MongoDB</Strong>, 
            <Strong>Angular</Strong>, <Strong>Ionic</Strong>, <Strong>Python</Strong>, <Strong>Docker</Strong> and <Strong>Sass</Strong>.
            </Text>

          </Text>

          <Text color="white" flex={.5} p={[0, 4]}>
            <Text mb={6} style={{textIndent: 20}}>
            Used to working in an <Strong>Agile environment</Strong>, I value including my client directly in the development process.
            In order to make the most efficient software as possible, I always communicate with everyone in the team.
            </Text>

            <Text style={{textIndent: 20}}>
            Finally, my academic background gave me strong theoritical knowledge in <Strong>artificial intelligence</Strong>, <Strong>advanced
            communication protocols</Strong> and <Strong>robot navigation</Strong>.
            Not only do I appreciate learning new challenging topics, I believe some beauty can be found in creating elegant 
            solutions to solve complex problems.
            </Text>
          </Text>
        </Flex>

        <Divider mb={12} mt={10}/>

        <Heading color="red.500" textShadow="0px 3px 3px #111" fontSize={50} mb={6}>
          Projects
        </Heading>

        <Divider mb={12} mt={10}/>

        <Heading color="red.500" textShadow="0px 3px 3px #111" fontSize={50} mb={6}>
          Contact
        </Heading>

      </Box>
    </Container>
    </>
  )
}
