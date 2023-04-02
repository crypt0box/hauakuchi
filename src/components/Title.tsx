import { Box, Heading, Text } from "@chakra-ui/react";
import { useState } from "react";
import { TypeAnimation } from "react-type-animation";

export const Title = () => {
  const [counter, setCounter] = useState(0);
  return (
    <Box color="tomato" textAlign="center">
      <Heading as="h1" size="xl" my="4">
        <TypeAnimation
          sequence={[
            "めっちゃはやくちでしゃべりたい",
            () => setCounter((prev) => prev + 1),
          ]}
          wrapper="span"
          cursor={false}
          speed={65}
          style={{ userSelect: "none" }}
        />
      </Heading>
      <Box h="48px">
        <Text size="lg" textAlign="center" fontFamily="Noto Sans JP">
          {counter > 0 && (
            <TypeAnimation
              sequence={[
                "つい早口になっちゃうくらい",
                () => setCounter((prev) => prev + 1),
              ]}
              wrapper="span"
              cursor={false}
              speed={65}
            />
          )}
        </Text>
        <Text size="lg" textAlign="center" fontFamily="Noto Sans JP">
          {counter > 1 && (
            <TypeAnimation
              sequence={[
                "しゃべりたいことを投稿しよう",
                () => setCounter((prev) => prev + 1),
              ]}
              wrapper="span"
              cursor={false}
              speed={65}
            />
          )}
        </Text>
      </Box>
    </Box>
  );
};
