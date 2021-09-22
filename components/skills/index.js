import { Box, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/core";
import SkillRow from './SkillRow';

export default function Skills() {
  return (
    <Flex justifyContent="center" flexDir="column" alignItems="center">
      <SimpleGrid columns={[1, 1, 2]} gap={2} pb={2} boxShadow="base" maxW="5xl" w="100%" overflow="hidden">
        <SkillRow title="Front-end" subtitle="React, Angular, WebGL"/>
        <SkillRow title="Back-end" subtitle="Node, Django, Java, SQL, MongoDB"/>
        <SkillRow title="Mobile" subtitle="Ionic, Cordova, React-Native"/>
        <SkillRow title="Robotics" subtitle="Python, C/C++, ROS, PX4, Linux"/>
      </SimpleGrid>
      <SkillRow title="Machine Learning" subtitle="Tensorflow, Keras, Apache OpenNLP" w="100%" maxW="5xl"/>
    </Flex>
  );
}