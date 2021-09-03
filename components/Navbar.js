import { Button, ButtonGroup, DarkMode, Flex, Icon } from "@chakra-ui/core";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import config from "../config";

export default function Navbar() {
  return (
    <DarkMode>
      <Flex display={['none', 'flex']} pos="fixed" zIndex="10" w="100%" h="85px" direction="row-reverse" p={4} 
            background="linear-gradient(180deg, rgba(44, 44, 45, 0.37) 0%, rgba(255,255,255,0) 100%)">
        <Button variant="ghost" mr={3} as="a" href="#contact">
          Contact
        </Button>
        <Button variant="ghost" mr={3} as="a" href="#projects">
          Projects
        </Button>
        <Button variant="ghost" mr={3} as="a" href="#about">
          About me
        </Button>

        <Flex size="lg" mr={6}>
          <ButtonGroup isAttached className="social-grp" colorScheme="gray" variant="outline">
            <Button as="a" href={config.email} className="social-btn">
              <Icon as={FaEnvelope}/>
            </Button>
            <Button as="a" href={config.github} target="_blank" className="social-btn">
              <Icon as={FaGithub}/>
            </Button>
            <Button as="a" href={config.linkedin} target="_blank" className="social-btn">
              <Icon as={FaLinkedin}/>
            </Button>
          </ButtonGroup>
        </Flex>
      </Flex>
    </DarkMode>
  );
}