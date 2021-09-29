import { SimpleGrid } from "@chakra-ui/core";
import { Paragraph, Strong } from "./typography";

export function About() {
  return (
    <SimpleGrid columns={[1, 1, 2]} mb={12} justifyItems="center">
      <Paragraph textAlign={['left', null, 'justify']} justifySelf={['center', null, 'end']} mr={[0, null, null, null, 5]}>
        I am Rémy, a <Strong>software engineer</Strong>, who graduated from Masters degrees in Telecommunications 
        and Computer Science at the <Strong>Shanghai Jiao Tong University</Strong> and <Strong>INSA Lyon</Strong>.
        I gained a strong fullstack web experience through freelancing and building my own startup.
      </Paragraph>
      
      <Paragraph textAlign={['left', null, 'justify']} justifySelf={['center', null, 'start']} ml={[0, null, null, null, 5]}>
        Used to work in an <Strong>Agile environment</Strong>, I value communicating with everyone in the team.
        A team with strong communication skills can acheive more than an efficient engineer.
      </Paragraph>

      <Paragraph textAlign={['left', null, 'justify']} justifySelf={['center', null, 'end']} mr={[0, null, null, null, 5]}>
        Passionate about new technologies, I have self taught myself most skills required to build
        complex infrastructures. With a good experience designing production systems, I am capable of
        building a secure, efficient and responsive <Strong>Web and Mobile based solution</Strong>. 
        I have experience with modern technologies
        like <Strong>NodeJS</Strong>, <Strong>ReactJS</Strong>, <Strong>MongoDB</Strong>, <Strong>Python</Strong>, <Strong>Docker</Strong> and 
        a few more.
      </Paragraph>

      <Paragraph textAlign={['left', null, 'justify']} justifySelf={['center', null, 'start']} ml={[0, null, null, null, 5]}>
        Finally, my academic background gave me strong theoritical knowledge in <Strong>artificial intelligence</Strong>, <Strong>advanced
        communication protocols</Strong> and <Strong>robot navigation</Strong>.
        Not only do I appreciate learning new challenging topics, I believe some beauty can be found in creating elegant 
        solutions to solve complex problems.
      </Paragraph>
    </SimpleGrid>
  );
}