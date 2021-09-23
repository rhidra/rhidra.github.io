import { Button, ButtonGroup, DarkMode, Flex, Icon } from "@chakra-ui/core";
import { useEffect, useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import config from "../../config";

export default function Navbar() {
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    let lastScrollTop;
    const listener = () => {
      // ref: https://dev.to/areeburrub/hide-navbar-as-scroll-down-in-less-than-10-lines-of-javascript-1i00
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        // Scroll up
        setShowNav(false);
      } else {
        // Scroll down
        setShowNav(true);
      }
      lastScrollTop = scrollTop;
    };

    window.addEventListener('scroll', listener);

    return () => window.removeEventListener('scroll', listener);
  }, []);

  return (
    <DarkMode>
      <Flex display={['none', 'flex']} alignItems="center" pos="fixed" zIndex="20" w="100%" h="70px" direction="row-reverse" px={4} 
            background="linear-gradient(180deg, rgba(0, 0, 0, 0.7) 0%, rgba(0,0,0,0) 100%)"
            transform={showNav ? 'translateY(0%)' : 'translateY(-100%)'} transition="transform linear 200ms">
        <Button variant="ghost" mr={3} as="a" href="#about">
          About
        </Button>
        <Button variant="ghost" mr={3} as="a" href="#education">
          Education
        </Button>
        <Button variant="ghost" mr={3} as="a" href="#projects">
          Projects
        </Button>
        <Button variant="ghost" mr={3} as="a" href="#work">
          Work
        </Button>
        <Button variant="ghost" mr={3} as="a" href="#skills">
          Skills
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