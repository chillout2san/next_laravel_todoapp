import { Box, Text } from '@chakra-ui/react'

interface Props {
  heading: string
  firstText: string
  secondText?: string
  thirdText?: string
  fourthText?: string
}

const HeaderModalBox = ({
  heading,
  firstText,
  secondText,
  thirdText,
  fourthText,
}: Props) => {
  return (
    <Box
      mb={2}
      p={2}
      bg="white"
      borderRadius="md"
      borderWidth="1px"
      shadow="lg"
    >
      <Box pb={2}>
        <Text as="u" fontWeight="bold">
          {heading}
        </Text>
      </Box>

      <Box pb={2}>
        <Text pb={1}>{firstText}</Text>
      </Box>

      {secondText && (
        <Box pb={2}>
          <Text pb={1}>{secondText}</Text>
        </Box>
      )}

      {thirdText && (
        <Box pb={2}>
          <Text pb={1}>{thirdText}</Text>
        </Box>
      )}

      {fourthText && (
        <Box pb={2}>
          <Text pb={1}>{fourthText}</Text>
        </Box>
      )}
    </Box>
  )
}

export default HeaderModalBox
