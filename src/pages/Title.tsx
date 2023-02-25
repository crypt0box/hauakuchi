import { Box, Heading, Text } from "@chakra-ui/react";

export const Title = () => (
  <Box color="tomato" textAlign="center">
    <Heading as="h1" size="xl" my="4">
      めっちゃはやくちでしゃべりたい
    </Heading>
    <Text size="lg" textAlign="center" fontFamily="Noto Sans JP">
      つい早口になっちゃうくらい
    </Text>
    <Text size="lg" textAlign="center" fontFamily="Noto Sans JP">
      しゃべりたいことを投稿しよう
    </Text>
  </Box>
);
