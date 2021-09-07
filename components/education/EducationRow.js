import { Flex, Heading, Text } from "@chakra-ui/core";
import { Fragment } from "react";
import { Strong } from "../typography";

export default function EducationRow({children, title, year, degree}) {
  return (
    <Flex flexDir="column" alignItems="flex-end">
      <Heading as="h4" color="grey.300" fontSize="md" textAlign="right">
        <Degree degree={degree}/>
      </Heading>
      
      <Heading as="h3" color="grey.300" textAlign="right">
        {title}
      </Heading>
      
      <Heading as="h5" color="grey.300" fontSize="md" textAlign="right">
        <Date date={year}/>
      </Heading>

      <Text fontSize="md" color="grey.300" maxW="55ch" style={{textIndent: 20}} textAlign="right">
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