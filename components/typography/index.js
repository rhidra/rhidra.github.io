import { Text } from "@chakra-ui/core"

export function Strong(props) {
  return <Text as="span" color="grey.100" fontWeight="bold" {...props}>{props.children}</Text>
}

export function Paragraph(props) {
  return <Text mb={3} style={{textIndent: 20}} p={[0, 2]} color="grey.300" maxW="50ch" {...props}>{props.children}</Text>
}