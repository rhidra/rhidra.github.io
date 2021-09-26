import { Flex, Heading, Text } from "@chakra-ui/core";
import { Fragment } from "react";
import { Strong } from "../typography";

export default function EducationRow({children, title, year, degree, ...props}) {
  return (
    <Flex 
      flexDir="column" 
      mb={4} 
      borderStyle="solid" borderLeftWidth={[0, 0, 4]} borderColor="red.500"
      bg={['none', 'none', 'linear-gradient(90deg,  hsla(263deg, 56%, 57%, .3) 0%, hsla(263deg, 56%, 57%,0) 70%)']}
      boxShadow={['none', 'none', 'inset 6px 0 3px rgba(0,0,0,0.4)']}
      py={3}
      pl={[0, 0, 3]}
      {...props}>
      <Heading as="h4" color="grey.300" fontSize={['sm', 'md']}>
        <Degree degree={degree}/>
      </Heading>
      
      <Heading as="h3" color="grey.300">
        {title}
      </Heading>
      
      <Heading as="h5" color="grey.300" fontSize="md">
        <Date date={year}/>
      </Heading>

      <Text fontSize="md" color="grey.300" maxW="55ch">
        {children}
      </Text>
    </Flex>
  );
}

function Degree({degree}) {
  if (typeof(degree) === 'string') {
    return degree;
  } else if (degree.length === 1) {
    return degree[0];
  } else {
    return degree.map((s, i) => {
      if (i !== degree.length - 1) {
        return <Fragment key={i}>{s} &nbsp;<Strong color="red.500">//</Strong>&nbsp;</Fragment>;
      } else {
        return <Fragment key={i}>&nbsp;{s}</Fragment>;
      }
    });
  }
}

function Date({date}) {
  if (typeof(date) === 'string') {
    return date;
  } else if (date.length === 1) {
    return date[0];
  } else {
    return <>From <Strong>{date[0]}</Strong> to <Strong>{date[1]}</Strong></>;
  }
}