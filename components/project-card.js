import { AspectRatio, Box, Image, Heading, Text, WrapItem, Wrap, Icon, Button, HStack, Flex, Spacer, useDisclosure, DarkMode, useTheme } from "@chakra-ui/core";
import {Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton} from "@chakra-ui/core"
import { FaGithub, FaEye } from 'react-icons/fa';

export default function ProjectCard(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const theme = useTheme();

  return (
    <Box 
      className="card" w={['xs', 'sm']} 
      borderWidth="1px" borderRadius="lg" 
      borderColor="#aaa" overflow="hidden" cursor={['pointer', 'auto']}
      onClick={() => window.matchMedia(`(max-width: ${theme.breakpoints[1]})`).matches ? onOpen() : null}
    >
      <AspectRatio ratio={4/3}>
        <Image src={props.img}/>
      </AspectRatio>

      <Box p={4} position="relative">
        <Heading as="h4" fontSize="md" color="white">{props.title}</Heading>
        <Wrap display={['block', 'none']} direction="row" color="white" mb={0}>
          {props.icons.map((icon, key) => (
            <WrapItem key={key}>
              <Icon as={icon} boxSize="30px"/>
            </WrapItem>
          ))}
        </Wrap>
      </Box>
      
      {/* Desktop description display */}
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
              <Button as="a" target="_blank" href={props.source} leftIcon={<FaGithub/>}>
                Source
              </Button>
            }
            
            {props.link && 
              <Button as="a" target="_blank" href={props.link} leftIcon={<FaEye/>}>
                Link
              </Button>
            }
          </HStack>
        </Flex>
      </Box>

      {/* Mobile description display */}
      <DarkMode>
      <Modal display={['block', 'none']} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color="white" fontFamily="Spartan">{props.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody color="white">
            {props.children}
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>
              Close
            </Button>

            {props.source &&
              <Button colorScheme="red" as="a" target="_blank" mr={3} href={props.source} leftIcon={<FaGithub/>}>
                Source
              </Button>
            }
            
            {props.link && 
              <Button colorScheme="red" as="a" target="_blank" href={props.link} leftIcon={<FaEye/>}>
                Link
              </Button>
            }
          </ModalFooter>
        </ModalContent>
      </Modal>
      </DarkMode>
    </Box>
  );
}