import { Box, Button, Container, Flex, Heading } from "@chakra-ui/core";
import Link from "next/link";
import Mouette from "../components/projects/Mouette";
import HlsConverter from "../components/projects/HlsConverter";
import FluidSimulation from "../components/projects/FluidSimulation";
import NowTalk from "../components/projects/NowTalk";
import NowChat from "../components/projects/NowChat";
import Portfolio from "../components/projects/Portfolio";
import RayMarching from "../components/projects/RayMarching";

export default function Projects() {
  return (
    <>
    <Container maxWidth="100%" p="0" bg="purple.900">
      <Box w="100%" minHeight="150vh" pt={[5, 8]} px={[2, 5, 10]}>

        <Link href="/">
          <Button colorScheme="gray" cursor="pointer" className="btn" variant="outline" mr={3} as="span" href="">
            Back
          </Button>
        </Link>

        <Heading color="red.500" textShadow="0px 3px 3px #111" fontSize={50} mt={12} mb={2} lineHeight="3.5rem">
          All personal projects
        </Heading>

        <Heading as="h3" color="gray.500" fontSize={20} mb={12} fontStyle="oblique 10deg">
          Side projects and student works
        </Heading>

        <Flex flexDir="column" alignItems="center" overflow="auto">
          <HlsConverter/>
          <FluidSimulation/>
          <RayMarching/>
          <NowTalk/>
          <NowChat/>
          <Portfolio/>
          <Mouette/>
        </Flex>
      </Box>
    </Container>
    </>
  );
}