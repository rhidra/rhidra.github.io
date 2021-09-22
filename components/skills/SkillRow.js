import { Box, Heading, Text, useMediaQuery } from "@chakra-ui/core";

export default function SkillRow({title, subtitle, w, maxW, link}) {
  const [isMobile] = useMediaQuery("(max-width: 48em)");

  function openLink(event, url) {
    event.preventDefault();
    event.stopPropagation();
    window.open(url, '_blank');
  }

  return (
    <Box
      pos="relative" 
      px={6} py={3} 
      w={w} maxW={maxW}
      overflow="hidden"
      role="group"
      bg="#2a095c"
      borderRadius="lg"
      cursor={['inherit', 'inherit', isMobile ? 'inherit' : 'pointer']}
      onClick={e => link && !isMobile ? openLink(e, link) : null}
    >
      <Box 
        w="100%" 
        h="100%" 
        bg="red.700" 
        pos="absolute" 
        left="0" 
        top="0"
        transition="ease"
        transitionDuration="250ms"
        zIndex="1"
        opacity="0"
        _groupHover={{
          // width: '100%',
          opacity: isMobile ? 0 : 1,
        }}
      />

      <Heading zIndex="10" pos="relative" color="white" as="h6" fontSize="1rem">
        {title}
      </Heading>
      
      <Text zIndex="15" pos="relative" color="white" fontFamily="Spartan" fontSize=".8rem" opacity=".7">
        {subtitle}
      </Text>
    </Box>
  );
}