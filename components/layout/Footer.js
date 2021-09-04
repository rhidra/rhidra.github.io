import { Button, ButtonGroup, Center, Divider, Flex, Icon } from "@chakra-ui/core";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import config from "../../config";

export default function Footer() {
  return (
    <>
    <Flex justify="center">
      <Divider opacity="1" w="100px" mb={12} mt={12} borderBottomWidth="3px" borderTopWidth="3px" borderRadius="20px" borderColor="red.600"/>
    </Flex>

    <Center size="lg" pb={10}>
      <ButtonGroup isAttached className="social-grp" variant="outline" color="grey.200">
        <Button as="a" href={config.email} className="social-btn" w={20} h={12}>
          <Icon boxSize="23px" as={FaEnvelope}/>
        </Button>
        <Button as="a" href={config.github} target="_blank" className="social-btn" w={20} h={12}>
          <Icon boxSize="23px" as={FaGithub}/>
        </Button>
        <Button as="a" href={config.linkedin} target="_blank" className="social-btn" w={20} h={12}>
          <Icon boxSize="23px" as={FaLinkedin}/>
        </Button>
      </ButtonGroup>
    </Center>
    </>
  );
}