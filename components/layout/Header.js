import { Box, Center, Container, Flex, Heading, Image, Text } from "@chakra-ui/core";
import { Strong, Paragraph } from "../typography";

export default function Header() {
  return (
    <Container maxWidth="100%" p="0" bg="grey.200">
      <Box w="100%" maxW="85rem" pt={[10, 10, 56]} pb={[0, 0, 32]} px={10} mx="auto">
        
        <Flex color="grey.800" direction={['column', 'column', 'row']} justifyContent={['center', null, null, null, 'start']}>
          <Center mb={[14, 14, 0]} mr={[0, 0, 5, 20]} alignSelf={['center', 'center', 'flex-start']}>
            <Image 
              src="img/photo.jpg" alt="Avatar" 
              color="grey" objectFit="cover" 
              borderRadius="full" boxSize={["200px", '250px', '200px', "250px"]} 
              boxShadow="-2px 8px 15px rgba(0,0,0,.4), -1px 2px 4px rgba(0,0,0,.3)"
            />
          </Center>

          <Flex direction="column" alignItems={['center', 'center', 'flex-start']}>
            <Heading textAlign={['center', 'center', 'left']} fontSize={['2xl', '4xl', '2xl', '4xl']} 
                    lineHeight={['', '', '', '4rem']} textShadow="0px 1px 1px HSL(34, 10%, 52%)">
              Hi,
              <br/> 
              I'm&nbsp;
              <Text as="span" color="red.500">Rémy Hidra</Text>&nbsp; 
              <Text as="span" textShadow="1px 1px 4px HSL(34, 10%, 52%)">👋</Text>
              <br/> 
              Let's build your <Text as="span" color="red.500">project</Text> together !
            </Heading>

            <Text mt={[10, 6]} mb={[12, 10]} fontSize={['md', 'lg']} textAlign={['center', 'center', 'left']}>
              <Text as="span" display={['inline', 'inline', 'block', 'inline']} mb={4}>
                <Text as="span" display={['block', 'block', 'inline']} mb={4}>
                  <Strong mr={[2, 4]} color="red.500">//</Strong>
                  &nbsp;French&nbsp;
                  <Strong m={[2, 4]} color="red.500" display={['inline', 'inline', 'none']}>//</Strong>
                </Text>

                <Text as="span" display={['block', 'block', 'inline']} mb={4}>
                  <Strong m={[2, 4]} color="red.500">//</Strong>
                  &nbsp;Freelance&nbsp;
                  <Strong m={[2, 4]} color="red.500" display={['inline', 'inline', 'inline', 'none']}>//</Strong>
                </Text>
              </Text>
              
              <Strong mr={[2, 4]} ml={[0, 0, 0, 4]} color="red.500">//</Strong>
              &nbsp;Software Engineer&nbsp;
              <Strong m={[2, 4]} color="red.500">//</Strong>
            </Text>

            <Text maxW="50ch" color="rgba(74, 72, 67, 0.93)">
              With a Master of Research in Robotics, I love maths and hardcore tech problems. But I also like to improve
              design and user experience of software, to build a more human-centered tech.
            </Text>
          </Flex>
        </Flex>

      </Box>
    </Container>
  );
}