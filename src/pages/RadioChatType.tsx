import { Box, useRadio, UseRadioProps, Flex } from "@chakra-ui/react";

type RadioChatTypeProps = {
  children: React.ReactNode;
} & UseRadioProps;

export const RadioChatType: React.FC<RadioChatTypeProps> = (props) => {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box
      as="label"
      _checked={{
        background: "1px solid red",
      }}
    >
      <input {...input} />
      <Flex
        {...checkbox}
        justify="center"
        width="16"
        height="16"
        backgroundColor="orange.50"
        cursor="pointer"
        borderRadius="md"
        _checked={{
          borderWidth: "1px",
          borderColor: "blue.400",
        }}
        _hover={{ backgroundColor: "orange.100" }}
      >
        {props.children}
      </Flex>
    </Box>
  );
};
