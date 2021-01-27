import { Box, Image, Heading, Text, WrapItem, Wrap, Icon, Button, HStack, Flex, Spacer, useDisclosure, DarkMode, useTheme, Accordion, AccordionItem, AccordionButton, AccordionPanel } from "@chakra-ui/core";
import {useRouter} from 'next/router';
import {FaCaretDown, FaCaretUp, FaCode, FaExternalLinkAlt, FaLink} from 'react-icons/fa';

export default function ProjectCard({img, children, icons, title, type, link, source}) {
  function openLink(event, url) {
    event.preventDefault();
    event.stopPropagation();
    window.open(url, '_blank');
  }

  return (
    <Accordion allowMultiple mb={10}>
      <AccordionItem border="none">
        {({isExpanded}) => (
          <AccordionButton boxShadow="none !important">
            <Flex 
              className="card"
              borderRadius="lg" bg="gray.50"
              boxShadow="base" maxW="5xl"
              flexDir="column"
              pb={2}
            >
              <Flex flexDir="row" alignItems="center">
                <Image transition=".2s all" src={img} w={[20, isExpanded ? 32 : 20, isExpanded ? 40 : 20]} h={[20, isExpanded ? 32 : 20, isExpanded ? 40 : 20]} m={[4, 12]} borderRadius="full" boxShadow="md"/>

                <Box pt={6} pr={6}>
                  <Heading as="h3" fontSize="xs" textTransform="uppercase" letterSpacing={1} textAlign="left">{type}</Heading>

                  <Heading as="h4" fontSize="md" textTransform="uppercase" lineHeight={5} mb={4} textAlign="left">{title}</Heading>

                  <AccordionPanel p={0}>
                    <Text fontSize="md" color="gray.500" mb={10} maxW="35em" textAlign="left" display={['none', 'none', 'block']}>
                      {children}
                    </Text>
                  </AccordionPanel>
                </Box>

                <Icon display={['none', 'none', 'block']} as={isExpanded ? FaCaretUp : FaCaretDown} boxSize="40px" mr={10}/>
              </Flex>

              <AccordionPanel>
                <Text fontSize="md" color="gray.500" mb={10} pt={4} pl={4} pr={4} maxW="35em" textAlign="left" display={['block', 'block', 'none']}>
                  {children}
                </Text>

                <Flex flexDir="row" justifyContent="center">
                  {icons.map((icon, key) => <Icon key={key} as={icon} color="black" boxSize="30px" mr={[1, 4]} ml={[1, 4]}/>)}
                </Flex>

                <Flex justifyContent={['center', 'center', 'flex-end']} mt={[6, 6, 0]}>
                  {source &&
                    <Button as="a" variant="ghost" colorScheme="purple" mr={6} onClick={e => openLink(e, source)}>
                      <Icon as={FaCode} boxSize={5} opacity={.8}/>&nbsp;
                      Source
                    </Button>
                  }

                  {link &&
                    <Button as="a" variant="ghost" colorScheme="purple" mr={[0, 6]} onClick={e => openLink(e, link)}>
                      <Icon as={FaExternalLinkAlt} boxSize={5} opacity={.8}/>&nbsp;
                      Link
                    </Button>
                  }
                </Flex>
              </AccordionPanel>
            </Flex>
          </AccordionButton>
        )}
      </AccordionItem>
    </Accordion>
  );
}