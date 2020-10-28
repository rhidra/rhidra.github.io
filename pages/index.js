import { Container, Flex, Heading, Box, Image, Center } from '@chakra-ui/core';
import Head from 'next/head';

export default function Home() {
  return (
    <Container maxWidth="100%" p="0">
      <Box bg="gray.700" w="100%" h="70vh" pt={[5, 100]} pl={[5, 100]} pr={5}>
        <Flex direction={['column', 'row']}>
          <Center mb={[6, 0]}>
            <Image src="img/photo.jpg" alt="Avatar" borderRadius="full" boxSize="150px" mr={[0, 6]}/>
          </Center>

          <Heading color="white" textAlign={['center', 'left']} fontSize={['2xl', '4xl']}>
            Hi ! I'm Rémy Hidra 👋<br/> 
            Let's build something together !
          </Heading>
        </Flex>
      </Box>

      <Box bg="purple.700" w="100%" h="40vh" pl={10}>
        <Heading color="white">
          Hi ! I'm Rémy Hidra.<br/> 
          Let's build something together !
        </Heading>
      </Box>
    </Container>
  )
}
