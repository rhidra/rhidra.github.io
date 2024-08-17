import { SimpleGrid } from "@chakra-ui/core";
import { Paragraph, Strong } from "./typography";

export function About() {
  return (
    <SimpleGrid columns={[1, 1, 2]} mb={12} justifyItems="center">
      <Paragraph textAlign={['left', null, 'justify']} justifySelf={['center', null, 'end']} mr={[0, null, null, null, 5]}>
        I am Rémy, a <Strong>software engineer</Strong> at Morgan Stanley in Montréal QC, 
        where I specialize in building robust financials systems & applications, for trading and risk analytics. 
        My toolkit includes Java, Spring, KDB/Q, SQL, Perl, and Python. I thrive on developing applications that 
        scale and perform under pressure, with a strong emphasis on robustness and reliability.
      </Paragraph>
      
      <Paragraph textAlign={['left', null, 'justify']} justifySelf={['center', null, 'start']} ml={[0, null, null, null, 5]}>
        Beyond my current role, I've gained valuable <Strong>entrepreneurial experience</Strong>: from cofounding a startup as the Tech Lead in Shanghai, China, 
        to enhancing frontends as a <Strong>freelance developer</Strong> in Lyon, France. 
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
        Academically, I fueled my passion for engineering and technology with a double Master's degree from Shanghai's <Strong>SJTU</Strong> and 
        the <Strong>INSA Lyon</Strong>. This education provided me with solid knowledge in <Strong>networking</Strong>, 
        <Strong>distributed computing</Strong>, <Strong>telecommunications</Strong>, <Strong>AI</Strong> and <Strong>robotics aerial navigation</Strong>.
      </Paragraph>
    </SimpleGrid>
  );
}