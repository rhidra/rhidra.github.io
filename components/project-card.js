import { AspectRatio, Box, Image, Heading, Text, WrapItem, Wrap, Icon, Button, HStack, Flex, Spacer, useDisclosure, DarkMode, useTheme } from "@chakra-ui/core";
import {Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton} from "@chakra-ui/core"
import { FaGithub, FaEye } from 'react-icons/fa';
import {useRouter} from 'next/router';

export default function ProjectCard({img, children, icons, title, type}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const theme = useTheme();
  const router = useRouter();

  return (
    <Flex 
      className="card" mb={10}
      borderRadius="lg" bg="gray.50"
      boxShadow="base" maxW="4xl"
      flexDir="column"
      pb={6}
      // onClick={() => router.push('/page')}
    >
      <Flex flexDir="row">
        <Image src={img} w={40} h={40} m={12} borderRadius="full" boxShadow="md"/>

        <Box pt={6} pr={12}>
          <Heading as="h3" fontSize="xs" textTransform="uppercase" letterSpacing={1}>{type}</Heading>

          <Heading as="h4" fontSize="md" textTransform="uppercase">{title}</Heading>

          <Text fontSize="md" color="gray.500" mb={10} maxW="35em">
            {children}
          </Text>
        </Box>
      </Flex>

      <Flex flexDir="row" justifyContent="center">
          {icons.map((icon, key) => (
              <Icon as={icon} color="black" boxSize="30px" mr={4} ml={4}/>
          ))}
      </Flex>
    </Flex>
  );
      
      
      {/*
      <Box display={['none', 'block']} className="slide" bg="red.600" p={4} overflow="hidden">
        <Flex direction="column" h="100%" pb={3} pt={3}>
          <Wrap direction="row" justify="center" color="white" mb={4}>
            {props.icons.map((icon, key) => (
              <WrapItem key={key}>
                <Icon as={icon} boxSize="40px"/>
              </WrapItem>
            ))}
          </Wrap>

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
      */}
}