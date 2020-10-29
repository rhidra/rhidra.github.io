import { AspectRatio, Box, Image, Heading } from "@chakra-ui/core";

export default function ProjectCard(props) {
  return (
    <Box w={['xs', 'sm']} borderWidth="1px" borderRadius="lg" borderColor="#aaa" overflow="hidden">
      <AspectRatio ratio={4/3}>
        <Image src="img/mouette/cover.png"/>
      </AspectRatio>
      <Box p={4}>
        <Heading as="h4" fontSize="md" color="white">Video collective management software</Heading>
      </Box>
    </Box>
  );
}