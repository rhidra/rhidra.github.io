import { AspectRatio, Box, Image, Heading, Text, WrapItem, Wrap, Icon, Button, HStack, Flex, Spacer } from "@chakra-ui/core";
import { FaPython, FaJs, FaGithub, FaEye } from 'react-icons/fa';

export default function ProjectCard(props) {
  return (
    <Box className="card" w={['xs', 'sm']} borderWidth="1px" borderRadius="lg" borderColor="#aaa" overflow="hidden">
      <AspectRatio ratio={4/3}>
        <Image src={props.img}/>
      </AspectRatio>

      <Box p={4}>
        <Heading as="h4" fontSize="md" color="white">{props.title}</Heading>
      </Box>

      <Box display={['none', 'block']} className="slide" bg="red.600" p={4} overflow="hidden">
        <Flex direction="column" h="100%" pb={3} pt={3}>
          <Wrap direction="row" justify="center" color="white" mb={4}>
            {props.icons.map((icon, key) => (
              <WrapItem key={key}>
                <Icon as={icon} boxSize="40px"/>
              </WrapItem>
            ))}
          </Wrap>

          <Text color="white" fontSize="md" textAlign="center">
              {props.children}
          </Text>

          <Spacer/>

          <HStack justify="center" spacing={4} mt={3}>
            {props.source &&
              <Button as="a" target="_blank" href={props.source} leftIcon={FaGithub}>
                Source
              </Button>
            }
            
            {props.link && 
              <Button as="a" target="_blank" href={props.link} leftIcon={FaEye}>
                Link
              </Button>
            }
          </HStack>
        </Flex>
      </Box>
    </Box>
  );
}