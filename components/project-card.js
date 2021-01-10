import { Box, Image, Heading, Text, WrapItem, Wrap, Icon, Button, HStack, Flex, Spacer, useDisclosure, DarkMode, useTheme } from "@chakra-ui/core";
import {useRouter} from 'next/router';

export default function ProjectCard({img, children, icons, title, type}) {
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
      <Flex flexDir="row" alignItems="center">
        <Image src={img} w={[20, 40]} h={[20, 40]} m={[4, 12]} borderRadius="full" boxShadow="md"/>

        <Box pt={6} pr={12}>
          <Heading as="h3" fontSize="xs" textTransform="uppercase" letterSpacing={1}>{type}</Heading>

          <Heading as="h4" fontSize="md" textTransform="uppercase" lineHeight={5} mb={4}>{title}</Heading>

          <Text fontSize="md" color="gray.500" mb={10} maxW="35em" display={['none', 'block']}>
            {children}
          </Text>
        </Box>
      </Flex>

      <Text fontSize="md" color="gray.500" mb={10} pt={4} pl={4} pr={4} maxW="35em" display={['block', 'none']}>
        {children}
      </Text>

      <Flex flexDir="row" justifyContent="center">
        {icons.map((icon, key) => <Icon as={icon} color="black" boxSize="30px" mr={[1, 4]} ml={[1, 4]}/>)}
      </Flex>
    </Flex>
  );
}