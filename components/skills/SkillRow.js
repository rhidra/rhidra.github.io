import { Box, Heading } from "@chakra-ui/core";

export default function SkillRow({title, subtitle}) {
  return (
    <Box
      pos="relative" 
      borderTop="1px" 
      borderBottom="1px" 
      borderTopColor="purple.900" 
      px={6} py={3} 
      overflow="hidden"
      role="group"
    >
      <Box 
        w="8px" 
        h="100%" 
        bg="red.500" 
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