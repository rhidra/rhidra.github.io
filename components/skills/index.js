import { Box, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/core";
import SkillRow from './SkillRow';

export default function Skills() {
  return (
    <Flex justifyContent="center" flexDir="column" alignItems="center">
      <SimpleGrid columns={[1, 1, 2]} gap={2} pb={2} boxShadow="base" maxW="5xl" w="100%" overflow="hidden">
        <SkillRow title="Back-end" subtitle="Java Spring, KDB/Q, Hazelcast, Node, SQL, MongoDB"/>
        <SkillRow title="DevOps" subtitle="Docker, Linux, Prometheus, Grafana"/>
        <SkillRow title="Scripting" subtitle="Bash, Perl, Python"/>
        <SkillRow title="Front-end / Mobile" subtitle="React, Angular, WebGL, Ionic, React-Native"/>
      </SimpleGrid>
      <SkillRow title="Machine Learning / Robotics" subtitle="Python, C/C++, Tensorflow, Keras, Apache OpenNLP, ROS, PX4" w="100%" maxW="5xl"/>
    </Flex>
  );
}