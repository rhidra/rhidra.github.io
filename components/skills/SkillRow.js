import { Box, Heading, Text } from "@chakra-ui/core";

export default function SkillRow({title, subtitle, w, maxW}) {
  return (
    <Box
      pos="relative" 
      px={6} py={3} 
      w={w} maxW={maxW}
      overflow="hidden"
      role="group"
      bg="#2a095c"
      borderRadius="lg"
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
          opacity: 1,
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