import { Container, Flex, Heading, Box, Image, Center, List, ListItem, ListIcon, Text, HStack, Icon, Wrap, WrapItem, Tooltip, Button, DarkMode, Divider } from '@chakra-ui/core';
import {PhoneIcon, AddIcon, WarningIcon} from '@chakra-ui/icons';
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
              Hi,<br/> I'm <Text as="span" color="red.500">Rémy Hidra</Text> 👋<br/> 
              Let's build something together !
            </Heading>

            <Text mt={2} mb={4} fontSize={['md', 'lg']}>
              <Text as="span" color="red.500" m={[2, 4]}>//</Text>
              French 
              <Text as="span" color="red.500" m={[2, 4]}>//</Text>
              Freelance
              <Text as="span" color="red.500" m={[2, 4]}>//</Text>
              Full-stack web developer
              <Text as="span" color="red.500" m={[2, 4]}>//</Text>
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

        <Text color="white">
          I am a french student doing a double
          degree in Telecommunications
          between the Shanghai Jiao Tong
          University and the INSA Lyon.
          Passionate about new technologies,
          I want to extend my knowledge
          in computer science, web
          technologies and artificial
          intelligence.
          <br/>
          Being an amateur filmmaker and
          former video game developper and
          artist, I am also interested in video
          and imagery of any kind.
        </Text>
      </Box>
    </Container>
    </>
  )
}
