import { Box, Image, Heading, Text, Icon, Button, Flex, Accordion, AccordionItem, AccordionButton, AccordionPanel, SimpleGrid } from "@chakra-ui/core";
import {FaCaretDown, FaCaretUp, FaCode, FaExternalLinkAlt} from 'react-icons/fa';

export default function ProjectCard({img, children, icons, title, type, link, source}) {
  function openLink(event, url) {
    event.preventDefault();
    event.stopPropagation();
    window.open(url, '_blank');
  }

  return (
    <Accordion allowMultiple mb={7}>
      <AccordionItem border="none">
        {({isExpanded}) => (
          <AccordionButton boxShadow="none !important" p={0}>
            <Flex 
              borderRadius="lg" bg="gray.100"
              boxShadow="base" maxW="5xl"
              flexDir="column"
              pb={2}
            >
              <Flex flexDir="row" alignItems="center">
                <Image transition=".2s all" src={img} 
                       w={[20, isExpanded ? 32 : 20, isExpanded ? 32 : 20, isExpanded ? 40 : 20]} 
                       h={[20, isExpanded ? 32 : 20, isExpanded ? 32 : 20, isExpanded ? 40 : 20]} 
                       m={[4,8]} borderRadius="full" boxShadow="md"/>

                <Box transition=".2s all" pt={[6, null, isExpanded ? 10 : 0]} pr={6}>
                  <Heading as="h3" fontSize="xs" textTransform="uppercase" letterSpacing={1} lineHeight={1} mb={3} textAlign="left">
                    {type}
                  </Heading>

                  <Heading as="h4" fontSize="md" textTransform="uppercase" lineHeight={5} mb={4} textAlign="left">
                    {title}
                  </Heading>

                  <AccordionPanel p={0}>
                    <Text fontSize="md" color="gray.500" mb={10} maxW="35em" textAlign="left" display={['none', 'none', 'block']}>
                      {children}
                    </Text>
                  </AccordionPanel>
                </Box>

                <Icon display={['none', 'none', 'none', 'block']} as={isExpanded ? FaCaretUp : FaCaretDown} boxSize="40px" mr={10}/>
              </Flex>

              <AccordionPanel>
                <Text fontSize="md" color="gray.500" mb={10} pt={4} px={[0, 2, 4]} maxW="35em" textAlign="left" display={['block', 'block', 'none']}>
                  {children}
                </Text>

                <Flex justifyContent="center">
                  <SimpleGrid columns={[1, 2, 4, 5]} spacingX={5} spacingY={4}>
                    {icons.map((icon, key) => <TechIcon icon={icon} key={key}/>)}
                  </SimpleGrid>
                </Flex>

                <Flex justifyContent={['center', 'center', 'center', 'flex-end']} mt={[6, 6, 6, 0]}>
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

export function TechIcon({icon}) {
  if (typeof(icon) === 'string') {
    return <Image src={`/img/icons/${icon}`} alt={icon} color="black" boxSize="30px" mx={[1]}/>;
  }

  if (!icon.label) {
    return <Icon as={icon} color="black" boxSize="30px" mx={[1]}/>;
  }

  return (
    <Flex alignItems="center">
      <Icon as={icon.icon} color="gray.500" opacity={.8} boxSize="25px" mr={[2]}/>
      <Text fontSize="sm" color="gray.500">{icon.label}</Text>
    </Flex>
  );
}