import { MessageResponse } from "@/hooks/useFetchMessages";
import { Button, Flex, FlexProps } from "@chakra-ui/react";
import Image from "next/image";

type ChatCardProps = {
  message: MessageResponse;
} & FlexProps;

export const ChatCard: React.FC<ChatCardProps> = ({ message, ...rest }) => {
  return (
    <Flex gap="2" {...rest}>
      <Button>
        <Image
          src={`https://twemoji.maxcdn.com/v/latest/svg/${message.icon}.svg`}
          alt={`感情アイコン_${message.icon}`}
          width={36}
          height={36}
        />
        <Image
          src={`https://twemoji.maxcdn.com/v/latest/svg/${message.balloon}.svg`}
          alt={`チャットアイコン_${message.balloon}`}
          width={36}
          height={36}
        />
      </Button>
    </Flex>
  );
};
