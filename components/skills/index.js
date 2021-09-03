import { Box, Flex, Heading, Text } from "@chakra-ui/core";
import SkillRow from './SkillRow';

export default function Skills() {
  return (
    <Flex justifyContent="center">
      <Box borderRadius="lg" bg="#2a095c" boxShadow="base" w="2xl" overflow="hidden">
        <SkillRow title="Front-end" subtitle="React, Angular, WebGL"/>
        <SkillRow title="Back-end" subtitle="Node, Django, Java, SQL, MongoDB"/>
        <SkillRow title="Mobile" subtitle="Ionic, Cordova, React-Native"/>
        <SkillRow title="Robotics" subtitle="Python, C/C++, ROS, PX4, Linux"/>
        <SkillRow title="Machine Learning" subtitle="Tensorflow, Keras, Apache OpenNLP"/>
      </Box>
    </Flex>
  );
}